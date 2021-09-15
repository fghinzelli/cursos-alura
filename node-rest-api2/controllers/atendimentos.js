module.exports = app => {
  
  app.get('/atendimentos', (req, res) => {
    res.end('Esta é a rota de atendimentos usando GET');
  })

  app.post('/atendimentos', (req, res) => {
    console.log(req.body);
    res.end('POST Recebido')
  })
}