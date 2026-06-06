import { type Request, type Response, type NextFunction } from 'express';
type LogFormat = 'simples' | 'completo';
export declare const loggerMiddleware: (format: LogFormat) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=logger.d.ts.map