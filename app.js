const http = require("http");
const fs = require('fs')

console.log("yo from app.js");
const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const { header, method, url } = req;
  let body = [];
  console.log(url);
  if (req.url === "/") {
    res.write("Hello from / directory");
    res.end();
  }
  if (req.url === '/about') {
      res.write(JSON.stringify( [1, 2, 3] ));
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
