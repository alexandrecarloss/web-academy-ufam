import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import morgan from 'morgan';
import getEnv from './utils/getEnv.js';
import { loggerMiddleware } from './middlewares/logger.js';
import router from './router/router.js';
import { engine } from 'express-handlebars';
import path from 'path';

const env = getEnv();
const PORT = env.PORT ?? 5566;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve('src/views'));

app.use(express.json());
app.use(morgan('short'));
app.use(loggerMiddleware('simples'));

const publicPath = path.resolve('public');
app.use('/css', express.static(path.join(publicPath, 'css')));
app.use('/js', express.static(path.join(publicPath, 'js')));
app.use('/img', express.static(path.join(publicPath, 'img')));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Requisição ${req.method} ${req.url}`);
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
