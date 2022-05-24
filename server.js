const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

console.log("yo from app.js");
const hostname = "127.0.0.1";
const port = 8080;

app.get('/', (req, res) => {
  console.log('here');
  res.status(200).render('home');
})

app.get('/about', (req, res) => {
  console.log('here');
  res.status(200).send('this is about');
})

app.get('/contact', (req, res) => {
  console.log('here');
  res.status(200).send('this is contact');
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
});


// const server = http.createServer((req, res) => {
//   const { header, method, url } = req;
//   console.log(url);

//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "./", "index.html"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;

//         console.log(data);

//         res.write(data);
//         res.end();
//       }
//     );
//   } else if (req.url === "/about") {
//     fs.readFile(
//       path.join(__dirname, "./", "about.html"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;

//         console.log(data);

//         res.write(data);
//         res.end();
//       }
//     );
//   } else {
//     fs.readFile(
//       path.join(__dirname, "./", "404.html"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;

//         console.log(data);

//         res.write(data);
//         res.end();
//       }
//     );
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
