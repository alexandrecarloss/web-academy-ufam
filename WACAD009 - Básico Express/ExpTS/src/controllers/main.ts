import type { Request, Response } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

const index = (req: Request, res: Response) => {
  res.send('Página principal do site');
};

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

const loremIpsum = (req: Request, res: Response) => {
  const qtd = parseInt(String(req.params.qtd));

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
};

const sobre = (req: Request, res: Response) => {
  res.send('Página sobre');
};

const bemvindo = (req: Request, res: Response) => {
  res.send(`Seja bem vindo ${req.params.nome}`);
};

const contato = (req: Request, res: Response) => {
  res.send('Página de contato');
};

const hb1 = (req: Request, res: Response) => {
  res.render('hb/hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
  });
};

const hb2 = (req: Request, res: Response) => {
  const message = "Bem-vindo(a) ao Web Academy!!"
  res.render('hb/hb2', {
    showMessage: true,
    message: message
  });
};

const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('hb/hb3', { profes });
};

const hb4 = function (req: Request, res: Response) {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];
  res.render('hb/hb4', { technologies });
};

export default { index, loremIpsum, sobre, bemvindo, contato, hb1, hb2, hb3, hb4 };

