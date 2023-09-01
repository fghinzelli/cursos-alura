var http = require('http');
var express = require('express');
// var app = express();


http.createServer((req, res) => {
  let valor = req.url.substr(req.url.indexOf('=') + 1)
  res.end(valor)
}).listen(3000, () =>{
  console.log('Servidor rodando na porta 3000')
});