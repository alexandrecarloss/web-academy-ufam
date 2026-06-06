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
    const paragraphs = texto.split("\n");
    let result = '';
    console.log(paragraphs);
    paragraphs.forEach(paragraph => {
        result += `
          <p>${paragraph}</p>
      `;
    });
    res.send("result");
});
router.get('/sobre', (req, res) => {
    res.send('Página sobre');
});
export default router;
//# sourceMappingURL=router.js.map