import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import morgan from 'morgan';
import getEnv from './utils/getEnv.js';
import { user } from './utils/user.js';
import { loggerMiddleware } from './middlewares/logger.js';

const env = getEnv();
const PORT = env.PORT ?? 5566;
const app = express();

app.use(express.json());
app.use(morgan('short'));

app.use(loggerMiddleware('simples'));

const publicPath = `${process.cwd()}/public`;

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/img', express.static(`${publicPath}/img`));

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
