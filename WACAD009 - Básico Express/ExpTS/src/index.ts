import express, { type Request, type Response, type NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import validateEnv, { user } from './utils/validateEnv.js';
import { loggerMiddleware } from './middlewares/logger.js';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('short'));

app.use(loggerMiddleware('simples'));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Requisição ${req.method} ${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.post('/', (req: Request, res: Response) => {
  console.log('Requisição POST no /');
  res.status(201).send('Recebido');
});

app.get('/contato', (req: Request, res: Response) => {
  res.send('Página de contato');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  if (user.checkAuth(req)) {
    next(); 
  } else {
    res.status(403).json({ msg: 'Usuário não autenticado' }); 
  }
});

app.get('/segredo', (req: Request, res: Response) => {
  res.json({ dados_secretos: { codigo: 156234 } });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
