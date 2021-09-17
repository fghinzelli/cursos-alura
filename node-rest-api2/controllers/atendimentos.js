const Atendimento = require('../models/atendimentos')

module.exports = app => {
  
  app.get('/atendimentos', (req, res) => {
    res.end('Esta é a rota de atendimentos usando GET');
  })

  app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    Atendimento.adiciona(req.body)
    res.end('POST Recebido')
  })

}