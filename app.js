
// // module http node js
// const http = require('http');

// // fileSystem module
// const fs = require('fs');

// // port
// const port = 3000;

// // fungsi untuk membaca halaman
// const findPage = (url ,response) => {
//   fs.readFile(url, (error, data) => {
//     if (error) {
//       response.writeHead(404);
//       response.write('Page Not Found !');
//     } else {
//       response.write(data);
//     }
//     response.end();
//   })
// }

// http
//   .createServer((request, response) => {
//     // membuat variable url
//     const url = request.url

//     console.log(url);

//     // response.writeHead(200, {
//     //     'Content-Type': 'text/html'
//     // })

//     // menampilkan halaman berdasarkan url
//     if (url === '/about') {
//       findPage('about.html', response)
//     } else if (url === '/contact') {
//       findPage('contact.html', response)
//     } else {
//       findPage('index.html', response)
//       // response.write('Hello World');
//       // response.end();
//     }
//   })

//   .listen({ port }, () => {
//     console.log(`Server is listening on port ${ port }`);
//   })

const express = require('express')
const app = express()
const port = 3000

// mendapatkan route home
app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname})
})

// mendapatkan route about
app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname})
})

// mendapatkan route contact
app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname})
})

// query params
app.get('/product/:id?', (req, res) => {
  // res.send('Product id : ' + req.params.id + '<br></br>'
  // + 'Category id : ' + req.params.idCat)
  res.send(`Product id : ${req.params.id} <br> Category id : ${req.query.category}`)
})

// error jika tidak ada route yang terdaftar
app.use('/', (req, res) => {
  res.status(404)
  res.send('Page Not Found : 404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})