import inquirer from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import chalk from 'chalk';
import { promptForParameters } from './prompts';
import { executeRequest } from '../api/ibge';
import { saveDataToJson } from '../utils/fileSaver';
import { allModules } from '../modules';
import { ApiModule, ApiEndpoint } from '../types/api';

// ... (o resto do arquivo continua igual, apenas a fonte dos módulos muda)

export async function showMainMenu() {
  while (true) {
    // 1. Selecionar o Módulo
    const { selectedModule }: { selectedModule: ApiModule } = await inquirer.prompt([
      {
        type: 'autocomplete',
        name: 'selectedModule',
        message: 'Qual grupo de informações você deseja consultar?',
        source: (_: any, input: string) => {
          const modules = allModules.map(m => ({ name: m.name, value: m }));
          if (!input) return modules;
          return modules.filter(m => m.name.toLowerCase().includes(input.toLowerCase()));
        },
      },
    ]);

    // 2. Selecionar o Endpoint
    const { selectedEndpoint }: { selectedEndpoint: ApiEndpoint } = await inquirer.prompt([
        {
          type: 'autocomplete',
          name: 'selectedEndpoint',
          message: 'Qual informação específica você quer?',
          source: (_: any, input: string) => {
            const endpoints = selectedModule.endpoints.map(e => ({ name: e.summary, value: e }));
            if (!input) return endpoints;
            return endpoints.filter(e => e.name.toLowerCase().includes(input.toLowerCase()));
          },
        },
      ]);

    // 3. Coletar Parâmetros
    const params = await promptForParameters(selectedEndpoint.parameters);

    // 4. Executar a Requisição
    console.log(chalk.yellow('\nBuscando dados na API do IBGE...'));
    const result = await executeRequest(selectedEndpoint.path, params);

    // 5. Salvar o Resultado
    if (result) {
        console.log(chalk.green('Dados recebidos com sucesso!'));
        await saveDataToJson(result, selectedEndpoint.path);
    } else {
        console.log(chalk.red('A requisição não retornou dados.'));
    }

    // 6. Continuar ou Sair
    const { continueOrExit } = await inquirer.prompt([{
        type: 'list',
        name: 'continueOrExit',
        message: 'Deseja fazer outra consulta?',
        choices: ['Sim', 'Não'],
    }]);

    if (continueOrExit === 'Não') {
        console.log(chalk.bold.cyan('\nObrigado por usar a CLI IBGE. Até mais!'));
        break;
    }
    console.clear();
  }
}
