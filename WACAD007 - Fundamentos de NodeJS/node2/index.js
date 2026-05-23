import { readdir, readFile } from "fs";
import { createServer } from "http";
import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV}` });

const FOLDER = process.argv[2] || process.env.FOLDER_PATH;
const PORT = process.env.PORT || 3333;

import { createLink } from "./util.js";

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});


const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  console.log("URL: " + req.url);

  if (req.url === "/") {
    readdir(FOLDER, (err, files) => {
        if (err) {
            res.write("<h1>Erro ao ler diretório</h1>");
            res.write(`<p>${err.message}</p>`);
            return res.end();
        }

        if (files.length === 0) {
            res.write("<h1>Pasta vazia</h1>");
            return res.end();
        }
        files.forEach((file) => res.write(createLink(file)));
        res.end();
    });
  } else {
    const filename = req.url.substring(1);

    readFile(`${FOLDER}/${filename}`, (err, data) => {
        if (err) {
            res.write("<h1>Arquivo não encontrado</h1>");
            return res.end();
        }

        res.write(createLink("Voltar", "/"));
        res.write("<br>");

        res.write(`<p>${data}</p>`);
        res.end();
    });
  }
});

server.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`),
);
