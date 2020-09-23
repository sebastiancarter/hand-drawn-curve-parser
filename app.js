const http = require('http');
const fs   = require ('fs');

const hostname = '127.0.0.1';
const port = 3000;
let html;

fs.readFile("./stepDad.html", function(error, webFile) {
    if (error) {
        throw error;
    }
    html = webFile;
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
