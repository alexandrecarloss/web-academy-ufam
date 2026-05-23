const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const dotenv = require("dotenv");

const { LoremIpsum } = require("lorem-ipsum");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

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

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = process.env.PUBLIC_PATH;

const server = http.createServer(async (req, res) => {

  try {
    if (req.url.startsWith("/lorem")) {

      const url = new URL(req.url, `http://localhost:${PORT}`);

      const qtd = Number(url.searchParams.get("qtd")) || 1;

      const texto = lorem.generateParagraphs(qtd);

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      return res.end(JSON.stringify({
        texto
      }));
    }

    let filePath;

    if (req.url === "/") {
      filePath = path.join(PUBLIC_PATH, "index.html");
    } else {
      filePath = path.join(PUBLIC_PATH, req.url);
    }

    const ext = path.extname(filePath);

    let contentType = "text/html";

    if (ext === ".css") {
      contentType = "text/css";
    }

    if (ext === ".js") {
      contentType = "application/javascript";
    }

    const data = await fs.readFile(filePath);

    res.writeHead(200, {
      "Content-Type": `${contentType}; charset=utf-8`
    });

    res.end(data);

  } catch (err) {

    res.writeHead(404, {
      "Content-Type": "text/html"
    });

    res.end("<h1>Arquivo não encontrado</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});