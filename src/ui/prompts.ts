import inquirer from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import ora from 'ora';
import { ApiParameter } from '../types/api';
import { executeRequest } from '../api/ibge';

// Função auxiliar para obter valor de um campo aninhado (ex: 'id.M49')
function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Cache para armazenar as opções de source já buscadas
const sourceOptionsCache: { [endpoint: string]: { name: string; value: any }[] } = {};

import { logError } from '../utils/logger';

// Função que busca as opções para o autocomplete (agora com cache)
async function getSourceOptions(source: ApiParameter['source']) {
  if (!source) return [];

  // Verifica se já temos as opções em cache
  if (sourceOptionsCache[source.endpoint]) {
    return sourceOptionsCache[source.endpoint];
  }
  
  const spinner = ora(`Buscando opções para ${source.displayField}...`).start();
  const items = await executeRequest(source.endpoint, {}); 
  
  if (!Array.isArray(items)) {
    spinner.fail('Falha ao buscar opções.');
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

export async function promptForParameters(parameters: ApiParameter[]) {
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
          message: `Selecione ${param.description}:`,
          source: async (_: any, input: string) => {
            // Filtra as opções do cache com base no que o usuário digitou
            if (!input) return allOptions;
            return allOptions.filter(opt => 
              opt.name.toLowerCase().includes(input.toLowerCase())
            );
          },
        },
      ]);
      results[param.name] = answer;
    } else {
      // Lógica para prompt de input normal
      const { answer } = await inquirer.prompt([
        {
          type: 'input',
          name: 'answer',
          message: `Digite ${param.description}:`,
        },
      ]);
      results[param.name] = answer;
    }
  }
  return results;
}
