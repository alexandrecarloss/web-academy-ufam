/*const http = require("http")

const server = http.createServer((req, res) => {
    res.write("Hello, world!")
    res.destroy()
})

// https://localhost:7777/
server.listen(7777)


const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const fs = require("fs")
const http = require("http")
const dotenv = require("dontenv")

dotenv.config()

const FOLDER = process.argv[2]
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html;charset=utf-8" })
    fstat.readdir(FOLDER, (err, files) => {
        files.forEach(f => res.write(`${f}<br>`))
        res.end();
    })
})

server.listen(PORT)

console.log(FOLDER)