module.exports = app => {
  
  app.get('/atendimentos', (req, res) => {
    res.end('Esta é a rota de atendimentos usando GET');
  })
}