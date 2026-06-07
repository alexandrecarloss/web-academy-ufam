import { LoremIpsum } from 'lorem-ipsum';
import { user } from '../utils/user.js';
const index = (req, res) => {
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
const loremIpsum = (req, res) => {
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
const sobre = (req, res) => {
    res.send('Página sobre');
};
const bemvindo = (req, res) => {
    res.send(`Seja bem vindo ${req.params.nome}`);
};
const contato = (req, res) => {
    res.send('Página de contato');
};
const hb1 = (req, res) => {
    res.render('main/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
    });
};
const hb2 = (req, res) => {
    const message = "Bem-vindo(a) ao Web Academy!!";
    res.render('main/hb2', {
        showMessage: true,
        message: message
    });
};
const hb3 = (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    res.render('main/hb3', { profes });
};
const hb4 = function (req, res) {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb4', { technologies });
};
const authMiddleware = (req, res, next) => {
    if (user.checkAuth(req)) {
        next();
    }
    else {
        res.status(403).json({ msg: 'Usuário não autenticado' });
    }
};
const segredo = (req, res) => {
    res.json({ dados_secretos: { codigo: 156234 } });
};
export default { index, loremIpsum, sobre, bemvindo, contato, hb1, hb2, hb3, hb4, authMiddleware, segredo };
//# sourceMappingURL=main.js.map