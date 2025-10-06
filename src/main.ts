#!/usr/bin/env node

import chalk from 'chalk';
import { showMainMenu } from './ui/menu';
import { appInfo } from './config/app-info';
import * as fs from 'fs';
import * as path from 'path';

// Lê o package.json para obter informações dinâmicas
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8'));

function showWelcomeMessage() {
  const asciiArt = fs.readFileSync(path.join(__dirname, './utils/ASCII.txt'), 'utf-8');
  
  console.clear();
  console.log(chalk.cyan(asciiArt));
  console.log('');
  console.log(chalk.bold(`${packageJson.name}`) + chalk.dim(` | Versão ${packageJson.version}`));
  console.log(chalk.italic(packageJson.description));
  console.log(chalk.dim('---'));
  console.log(`- ${chalk.bold('Endpoints atualizados em:')} ${chalk.yellow(appInfo.lastUpdated)}`);
  console.log(`- ${chalk.bold('Reportar um problema:')} ${chalk.underline.blue(appInfo.issueUrl)}`);
  console.log(chalk.dim('---'));
  console.log('\n');
}

async function main() {
  showWelcomeMessage();
  await showMainMenu();
}

main();