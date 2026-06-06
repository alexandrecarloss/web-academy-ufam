import express, {} from 'express';
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
app.use((req, res, next) => {
    console.log(`Requisição ${req.method} ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.post('/', (req, res) => {
    console.log('Requisição POST no /');
    res.status(201).send('Recebido');
});
app.get('/contato', (req, res) => {
    res.send('Página de contato');
});
app.use((req, res, next) => {
    if (user.checkAuth(req)) {
        next();
    }
    else {
        res.status(403).json({ msg: 'Usuário não autenticado' });
    }
});
app.get('/segredo', (req, res) => {
    res.json({ dados_secretos: { codigo: 156234 } });
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map