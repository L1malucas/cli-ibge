import * as fs from 'fs/promises';
import * as path from 'path';

const LOG_FILE_PATH = path.join(process.cwd(), 'logs', 'error.log');

interface LogEntry {
  timestamp: string;
  level: 'ERROR' | 'INFO' | 'WARN';
  message: string;
  stack?: string;
  context?: object;
}

export async function logError(error: Error, context?: object) {
  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    level: 'ERROR',
    message: error.message,
    stack: error.stack,
    context: context,
  };

  const logLine = JSON.stringify(logEntry) + '\n';

  try {
    await fs.appendFile(LOG_FILE_PATH, logLine, 'utf-8');
  } catch (fileError) {
    console.error('Falha ao escrever no arquivo de log:', fileError);
    console.error('Erro original:', logEntry);
  }
}

// Opcional: função para logs de informação, se necessário no futuro
export async function logInfo(message: string, context?: object) {
  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    level: 'INFO',
    message: message,
    context: context,
  };
  const logLine = JSON.stringify(logEntry) + '\n';
  try {
    await fs.appendFile(LOG_FILE_PATH, logLine, 'utf-8');
  } catch (fileError) {
    console.error('Falha ao escrever no arquivo de log:', fileError);
  }
}
