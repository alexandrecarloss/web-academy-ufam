import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import { LoremIpsum } from 'lorem-ipsum';
import { user } from '../utils/user.js';

const router = Router();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 4,
    max: 16,
  },
});

router.get('/', (req, res) => {
  res.send('Página principal do site');
});

router.get('/lorem/:qtd', (req, res) => {
  const qtd = parseInt(req.params.qtd);

  if (isNaN(qtd) || qtd <= 0) {
    return res.status(400).json({ error: 'Quantidade inválida' });
  }

  const texto = lorem.generateParagraphs(qtd);

  const paragraphs = texto.split('\n');
  let result = '';

  paragraphs.forEach((paragraph) => {
    result += `
          <p>${paragraph}</p>
      `;
  });

  res.send(result);
});

router.get('/sobre', (req, res) => {
  res.send('Página sobre');
});

router.get('/bemvindo/:nome', (req: Request, res: Response) => {
  res.send(`Seja bem vindo ${req.params.nome}`);
});

router.get('/contato', (req: Request, res: Response) => {
  res.send('Página de contato');
});

router.get('/hb1', (req, res) => {
  res.render('hb/hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
    layout: false,
  });
});

router.get('/hb2', (req, res) => {
  res.render('hb/hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
  });
});

router.get('/hb3', (req, res) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('hb/hb3', { profes, layout: false });
});

router.get('/hb4', function (req, res) {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];
  res.render('hb/hb4', { technologies, layout: false });
});

// --- BARREIRA DE AUTENTICAÇÃO ---
router.use((req: Request, res: Response, next: NextFunction) => {
  if (user.checkAuth(req)) {
    next();
  } else {
    res.status(403).json({ msg: 'Usuário não autenticado' });
  }
});

router.get('/segredo', (req: Request, res: Response) => {
  res.json({ dados_secretos: { codigo: 156234 } });
});

export default router;
