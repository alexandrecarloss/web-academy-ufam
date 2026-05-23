const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = process.env.PUBLIC_PATH;

const server = http.createServer(async (req, res) => {
  try {
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

    res.writeHead(200, {"content-type": `${contentType}; charset=utf-8`
    });

    res.end(data);
  } catch (err) {
    res.writeHead(404, {"content-type": "text/html; charset=utf-8"});
    res.end("<h1>Arquivo não encontrado</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
