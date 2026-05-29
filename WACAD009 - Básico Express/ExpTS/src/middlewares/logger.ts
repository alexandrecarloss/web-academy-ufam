import { type Request, type Response, type NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

type LogFormat = 'simples' | 'completo';

export const loggerMiddleware = (format: LogFormat) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const logDir = process.env.LOG_DIR || 'logs';
    const logFilePath = path.join(logDir, 'access.log');

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const timestamp = new Date().toISOString();
    let logLine = '';

    if (format === 'simples') {
      logLine = `${timestamp} | ${req.method} | ${req.url}\n`;
    } else if (format === 'completo') {
      const httpVersion = req.httpVersion;
      const userAgent = req.get('User-Agent') || 'Unknown-Agent';
      logLine = `${timestamp} | ${req.method} | ${req.url} | HTTP/${httpVersion} | ${userAgent}\n`;
    }

    try {
      await fs.promises.appendFile(logFilePath, logLine, 'utf-8');
    } catch (error) {
      console.error('Erro ao salvar o arquivo de log:', error);
    }

    next();
  };
};