import * as fs from 'fs/promises';
import * as path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

import ora from 'ora';

export async function saveDataToJson(data: any, endpointPath: string) {
  console.log(chalk.bold.yellow('\nOnde você gostaria de salvar o resultado?'));

  const { saveLocation } = await inquirer.prompt([
    {
      type: 'input',
      name: 'saveLocation',
      message: 'Caminho do diretório (deixe em branco para o atual):',
      default: '.',
    },
  ]);

  // Gera um nome de arquivo baseado no endpoint e no timestamp
  const sanitizedPath = endpointPath.replace(/\/|\{|\}/g, '_');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `${sanitizedPath}_${timestamp}.json`;
  const fullPath = path.resolve(saveLocation, fileName);

  const spinner = ora(`Salvando arquivo em ${fullPath}...`).start();
  try {
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
    spinner.succeed(chalk.green(`Resultado salvo com sucesso!`));
    console.log(chalk.dim(fullPath));
  } catch (error) {
    spinner.fail(chalk.red(`Erro ao salvar o arquivo.`));
    console.error(chalk.red(error));
  }
}
