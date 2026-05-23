// import { readFile } from 'fs/promises';

// async function lerArquivo() {
//   try {
//     const dados = await readFile('./commonJs.txt', 'utf8');
//     console.log(dados);
//   } catch (erro) {
//     console.error('Erro ao ler o arquivo:', erro);
//   }
// }

// lerArquivo();
const cluster = require("cluster");
const http = require("http");
const { cpus } = require("os");
const BASE_PORT = 3000;
if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork({ PORT: BASE_PORT + i });
  }
} else {
  const port = process.env.PORT;
  http
    .createServer((req, res) => {
      res.end(`Worker ${cluster.worker.id} - porta ${port}`);
    })
    .listen(port);
}
