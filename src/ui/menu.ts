import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { allModules } from '../modules';
import { ApiModule, ApiEndpoint } from '../types/api';
import { promptForParameters } from './prompts';
import { executeRequest } from '../api/ibge';
import { saveDataToJson } from '../utils/fileSaver';
import { logError } from '../utils/logger';

const QUIT_VALUE = 'QUIT';
const BACK_VALUE = 'BACK';

const QUIT_OPTION = { name: chalk.red('0. Sair da CLI'), value: QUIT_VALUE };
const BACK_OPTION = { name: chalk.yellow('Voltar ao menu anterior'), value: BACK_VALUE };

function printModulesInColumns() {
  console.log(chalk.bold.cyan('Selecione o grupo de informações que deseja consultar:'));
  
  const terminalWidth = process.stdout.columns || 80; // Largura do terminal, padrão 80
  const numColumns = 2; // Manter 2 colunas para legibilidade
  const minPadding = 4; // Padding mínimo entre colunas

  // Calcula a largura máxima de um item para determinar o padding
  const maxItemLength = allModules.reduce((max, module) => 
    Math.max(max, `${allModules.indexOf(module) + 1}. ${module.name}`.length), 0
  );
  const calculatedColumnWidth = Math.floor(terminalWidth / numColumns);
  const effectiveColumnWidth = Math.max(calculatedColumnWidth, maxItemLength + minPadding);

  let output = '';
  allModules.forEach((module, index) => {
    const number = chalk.dim(`${index + 1}.`);
    const moduleName = chalk.green(module.name);
    const item = `${number} ${moduleName}`;

    output += item.padEnd(effectiveColumnWidth, ' ');

    if ((index + 1) % numColumns === 0 || index === allModules.length - 1) {
      output += '\n';
    }
  });
  console.log(output);
  console.log(QUIT_OPTION.name);
}

async function selectModule(): Promise<ApiModule | typeof QUIT_VALUE | null> {
  printModulesInColumns();
  const { moduleIndex } = await inquirer.prompt([
    {
      type: 'input',
      name: 'moduleIndex',
      message: chalk.blue('Digite o número da opção desejada:'),
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
    return QUIT_VALUE;
  }
  return allModules[index - 1];
}

async function selectEndpoint(module: ApiModule): Promise<ApiEndpoint | typeof BACK_VALUE | typeof QUIT_VALUE | null> {
    console.clear();
    console.log(chalk.bold.cyan(`Módulo: ${module.name}`));
    if (module.description) {
      console.log(chalk.italic.dim(`  Descrição: ${module.description}`));
    }
    console.log(chalk.dim(`  ${module.endpoints.length} opções de serviço disponíveis.\n`));

    const { selectedEndpoint } = await inquirer.prompt([
        {
          type: 'autocomplete',
          name: 'selectedEndpoint',
          message: chalk.blue('Qual serviço você quer consultar?'),
          source: (_: any, input: string) => {
            const endpoints = module.endpoints.map(e => ({ name: chalk.green(`${e.summary} - ${chalk.dim(e.description)}`), value: e }));
            const choices = [BACK_OPTION, QUIT_OPTION, new inquirer.Separator(), ...endpoints];
            if (!input) return choices;
            
            // Filtra as opções, ignorando separadores e opções de controle
            return choices.filter(choice => {
              if (choice instanceof inquirer.Separator) {
                return true; // Sempre mostra os separadores
              }
              // Verifica se é uma das opções de controle (Voltar/Sair)
              if (choice.value === BACK_VALUE || choice.value === QUIT_VALUE) {
                return true; // Sempre mostra as opções de controle
              }
              // Filtra endpoints normais
              return choice.name.toLowerCase().includes(input.toLowerCase());
            });
          },
        },
      ]);
    return selectedEndpoint;
}

export async function showMainMenu() {
  while (true) {
    console.clear();
    const selectedModule = await selectModule();

    if (selectedModule === QUIT_VALUE) break; // Sai do loop principal
    if (!selectedModule) continue; // Volta para o menu de módulos (se a seleção for inválida)

    const selectedEndpoint = await selectEndpoint(selectedModule);

    if (selectedEndpoint === BACK_VALUE) continue; // Volta para o menu de módulos
    if (selectedEndpoint === QUIT_VALUE) break; // Sai do loop principal
    if (!selectedEndpoint) continue; // Volta para o menu de módulos (se a seleção for inválida)

    const params = await promptForParameters(selectedEndpoint.parameters);

    // Se o usuário escolheu voltar no prompt de parâmetros
    if (params === null) {
      continue; // Volta para a seleção de endpoint
    }

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

    const { continueOrExit } = await inquirer.prompt([{ 
        type: 'list',
        name: 'continueOrExit',
        message: chalk.blue('Deseja fazer outra consulta?'),
        choices: [chalk.green('Sim'), chalk.red('Não')],
    }]);

    if (continueOrExit === chalk.red('Não')) break;
    
    console.clear();
  }
  console.log(chalk.bold.cyan('\nObrigado por usar a CLI IBGE. Até mais!'));
}
