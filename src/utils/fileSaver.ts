import * as fs from 'fs/promises';
import * as path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

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

  try {
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
    console.log(chalk.green(`\nResultado salvo com sucesso em: ${fullPath}`));
  } catch (error) {
    console.error(chalk.red(`\nErro ao salvar o arquivo em ${fullPath}:`), error);
  }
}
