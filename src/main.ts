#!/usr/bin/env node

import chalk from 'chalk';
import { showMainMenu } from './ui/menu';

import { appInfo } from './config/app-info';

function showWelcomeMessage() {
  console.clear();
  console.log(chalk.bold.cyan('========================================='));
  console.log(chalk.bold.cyan('    Bem-vindo à CLI de Consulta IBGE   '));
  console.log(chalk.bold.cyan('========================================='));
  console.log(`\nEndpoints atualizados em: ${chalk.yellow(appInfo.lastUpdated)}`);
  console.log(`Encontrou um bug ou endpoint faltando? Abra uma issue:`);
  console.log(chalk.underline.blue(appInfo.issueUrl));
  console.log('\n');
}

async function main() {
  showWelcomeMessage();
  await showMainMenu();
}

main();