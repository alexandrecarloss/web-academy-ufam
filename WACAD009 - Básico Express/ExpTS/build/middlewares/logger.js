import {} from 'express';
import fs from 'fs';
import path from 'path';
export const loggerMiddleware = (format) => {
    return async (req, res, next) => {
        const logDir = process.env.LOG_DIR || 'logs';
        const logFilePath = path.join(logDir, 'access.log');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        const timestamp = new Date().toISOString();
        let logLine = '';
        if (format === 'simples') {
            logLine = `${timestamp} | ${req.method} | ${req.url}\n`;
        }
        else if (format === 'completo') {
            const httpVersion = req.httpVersion;
            const userAgent = req.get('User-Agent') || 'Unknown-Agent';
            logLine = `${timestamp} | ${req.method} | ${req.url} | HTTP/${httpVersion} | ${userAgent}\n`;
        }
        try {
            await fs.promises.appendFile(logFilePath, logLine, 'utf-8');
        }
        catch (error) {
            console.error('Erro ao salvar o arquivo de log:', error);
        }
        next();
    };
};
//# sourceMappingURL=logger.js.map