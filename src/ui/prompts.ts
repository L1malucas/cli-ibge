import inquirer from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import ora from 'ora';
import chalk from 'chalk';
import { ApiParameter } from '../types/api';
import { executeRequest } from '../api/ibge';
import { logError } from '../utils/logger';

// Função auxiliar para obter valor de um campo aninhado (ex: 'id.M49')
function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Cache para armazenar as opções de source já buscadas
const sourceOptionsCache: { [endpoint: string]: { name: string; value: any }[] } = {};

// Função que busca as opções para o autocomplete (agora com cache)
async function getSourceOptions(source: ApiParameter['source']) {
  if (!source) return [];

  // Verifica se já temos as opções em cache
  if (sourceOptionsCache[source.endpoint]) {
    return sourceOptionsCache[source.endpoint];
  }
  
  const spinner = ora(chalk.yellow(`Buscando opções para ${source.displayField}...`)).start();
  const items = await executeRequest(source.endpoint, {}); 
  
  if (!Array.isArray(items)) {
    spinner.fail(chalk.red('Falha ao buscar opções.'));
    logError(new Error('API retornou dados inesperados ou nulos'), { endpoint: source.endpoint, displayField: source.displayField });
    return [];
  }

  spinner.succeed();
  const options = items.map(item => ({
    name: getNestedValue(item, source.displayField),
    value: getNestedValue(item, source.valueField),
  }));

  // Armazena em cache antes de retornar
  sourceOptionsCache[source.endpoint] = options;
  return options;
}

// Registra o tipo de prompt 'autocomplete'
inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

const BACK_VALUE = 'BACK';
const BACK_OPTION_PARAM = { name: chalk.yellow('Voltar'), value: BACK_VALUE };

export async function promptForParameters(parameters: ApiParameter[]): Promise<{ [key: string]: string } | null> {
  const results: { [key: string]: string } = {};

  for (const param of parameters) {
    if (param.source) {
      const source = param.source; 
      
      // Pré-carrega todas as opções para este source UMA VEZ
      const allOptions = await getSourceOptions(source);

      const { answer } = await inquirer.prompt([
        {
          type: 'autocomplete',
          name: 'answer',
          message: chalk.blue(`Selecione ${param.description}:`),
          source: async (_: any, input: string) => {
            const choices = [BACK_OPTION_PARAM, new inquirer.Separator(), ...allOptions];
            if (!input) return choices;
            return choices.filter(choice => {
              if (choice instanceof inquirer.Separator) {
                return true; // Sempre mostra os separadores
              }
              if (choice.value === BACK_VALUE) {
                return true; // Sempre mostra a opção de voltar
              }
              // Filtra opções normais
              return choice.name.toLowerCase().includes(input.toLowerCase());
            });
          },
        },
      ]);
      if (answer === BACK_VALUE) return null; // Sinaliza para voltar
      results[param.name] = answer;
    } else {
      const { answer } = await inquirer.prompt([
        {
          type: 'input',
          name: 'answer',
          message: chalk.blue(`Digite ${param.description}:`),
        },
      ]);
      if (answer === BACK_VALUE) return null; // Sinaliza para voltar
      results[param.name] = answer;
    }
  }
  return results;
}