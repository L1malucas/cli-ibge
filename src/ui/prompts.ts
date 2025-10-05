import inquirer from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { ApiParameter } from '../types/api';
import { executeRequest } from '../api/ibge';

// Função auxiliar para obter valor de um campo aninhado (ex: 'id.M49')
function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Registra o tipo de prompt 'autocomplete'
inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

import ora from 'ora';

// Função que busca as opções para o autocomplete
async function getSourceOptions(source: ApiParameter['source']) {
  if (!source) return [];
  
  const spinner = ora(`Buscando opções para ${source.displayField}...`).start();
  const items = await executeRequest(source.endpoint, {});
  
  if (!Array.isArray(items)) {
    spinner.fail('Falha ao buscar opções.');
    return [];
  }

  spinner.succeed();
  return items.map(item => ({
    name: getNestedValue(item, source.displayField), // O que o usuário vê
    value: getNestedValue(item, source.valueField),  // O valor real (o ID)
  }));
}

export async function promptForParameters(parameters: ApiParameter[]) {
  const results: { [key: string]: string } = {};

  for (const param of parameters) {
    if (param.source) {
      // Lógica para prompt de autocomplete
      const source = param.source; // Garante que o TypeScript saiba que source não é undefined
      const { answer } = await inquirer.prompt([
        {
          type: 'autocomplete',
          name: 'answer',
          message: `Selecione ${param.description}:`,
          source: async (_: any, input: string) => {
            const options = await getSourceOptions(source);
            if (!input) return options;
            // Filtra as opções com base no que o usuário digitou
            return options.filter(opt => 
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