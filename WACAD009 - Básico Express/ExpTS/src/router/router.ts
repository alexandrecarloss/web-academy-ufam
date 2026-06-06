import { Router } from 'express';
import { LoremIpsum } from "lorem-ipsum";
const router = Router();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8
  },
  wordsPerSentence: {
    min: 4,
    max: 16
  }
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
  res.send(texto);
});

router.get('/sobre', (req, res) => {
  res.send('Página sobre');
});

export default router;
