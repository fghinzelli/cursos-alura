const express = require('express');

const app = express();


app.get('/atendimentos', (req, res) => {
  res.end('Esta é a rota de atendimentos usando GET');
})

app.listen(3000, () => {
  console.log('Servidor rodando')
})