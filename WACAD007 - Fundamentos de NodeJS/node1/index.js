const fs = require("fs")
const http = require('http');


const FOLDER = process.argv[0];
const PORT = process.env.PORT;

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html;charset=utf-8" })
    fstat.readdir(FOLDER, (err, files) => {
        files.forEach(f => res.write(`${f}<br>`))
        res.end();
    })
})

server.listen(PORT)

console.log(FOLDER)