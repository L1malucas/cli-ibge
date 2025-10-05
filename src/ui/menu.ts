import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { allModules } from '../modules';
import { ApiModule, ApiEndpoint } from '../types/api';
import { promptForParameters } from './prompts';
import { executeRequest } from '../api/ibge';
import { saveDataToJson } from '../utils/fileSaver';
import { logError } from '../utils/logger';

const QUIT_OPTION = { name: 'Sair', value: null };

function printModulesInColumns() {
  console.log(chalk.bold('Selecione o grupo de informações que deseja consultar:'));
  
  const terminalWidth = process.stdout.columns || 80; // Largura do terminal, padrão 80
  const numColumns = 2; // Manter 2 colunas para legibilidade
  const columnWidth = Math.floor(terminalWidth / numColumns); // Largura de cada coluna

  let output = '';
  allModules.forEach((module, index) => {
    const number = chalk.dim(`${index + 1}.`);
    const moduleName = module.name;
    const item = `${number} ${moduleName}`;

    // Adiciona padding para alinhar as colunas
    output += item.padEnd(columnWidth, ' ');

    if ((index + 1) % numColumns === 0 || index === allModules.length - 1) {
      output += '\n';
    }
  });
  console.log(output);
  console.log(chalk.dim('0. Sair'));
}

async function selectModule(): Promise<ApiModule | null> {
  printModulesInColumns();
  const { moduleIndex } = await inquirer.prompt([
    {
      type: 'input',
      name: 'moduleIndex',
      message: 'Digite o número da opção desejada:',
      validate: (input) => {
        const num = parseInt(input, 10);
        if (isNaN(num) || num < 0 || num > allModules.length) {
          return 'Por favor, digite um número válido da lista.';
        }
        return true;
      },
    },
  ]);

  const index = parseInt(moduleIndex, 10);
  if (index === 0) {
    return null;
  }
  return allModules[index - 1];
}

async function selectEndpoint(module: ApiModule): Promise<ApiEndpoint | null> {
    const { selectedEndpoint } = await inquirer.prompt([
        {
          type: 'autocomplete',
          name: 'selectedEndpoint',
          message: 'Qual informação específica você quer?',
          source: (_: any, input: string) => {
            const endpoints = module.endpoints.map(e => ({ name: `${e.summary} - ${e.description}`, value: e }));
            if (!input) return [new inquirer.Separator('---'), QUIT_OPTION, new inquirer.Separator('---'), ...endpoints];
            
            const filteredEndpoints = endpoints.filter(e => e.name.toLowerCase().includes(input.toLowerCase()));
            return [new inquirer.Separator('---'), QUIT_OPTION, new inquirer.Separator('---'), ...filteredEndpoints];
          },
        },
      ]);
    return selectedEndpoint;
}

export async function showMainMenu() {
  while (true) {
    const selectedModule = await selectModule();

    if (!selectedModule) break; // Sai do loop principal

    if (selectedModule.description) {
      console.log(chalk.italic.dim(`\nDescrição: ${selectedModule.description}\n`));
    }

    const selectedEndpoint = await selectEndpoint(selectedModule);

    if (!selectedEndpoint) continue; // Volta para o menu de módulos

    const params = await promptForParameters(selectedEndpoint.parameters);

    const spinner = ora(chalk.yellow('Buscando dados na API do IBGE...')).start();
    let result = null;
    try {
      result = await executeRequest(selectedEndpoint.path, params);
    } catch (error: any) {
      spinner.fail(chalk.red('Erro ao executar a requisição.'));
      console.error(chalk.red(error.message));
      logError(error, { path: selectedEndpoint.path, params });
    }

    if (result) {
        spinner.succeed(chalk.green('Dados recebidos com sucesso!'));
        try {
          await saveDataToJson(result, selectedEndpoint.path);
        } catch (error: any) {
          spinner.fail(chalk.red('Erro ao salvar o resultado.'));
          console.error(chalk.red(error.message));
          logError(error, { data: result, endpointPath: selectedEndpoint.path });
        }
    } else if (result === null) {
        spinner.fail(chalk.red('A requisição não retornou dados ou falhou.'));
    }

    const { continueOrExit } = await inquirer.prompt([
        {
            type: 'list',
            name: 'continueOrExit',
            message: 'Deseja fazer outra consulta?',
            choices: ['Sim', 'Não'],
        },
    ]);

    if (continueOrExit === 'Não') break;
    
    console.clear();
  }
  console.log(chalk.bold.cyan('\nObrigado por usar a CLI IBGE. Até mais!'));
}
