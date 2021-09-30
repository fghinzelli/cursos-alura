const Atendimento = require('../models/atendimentos')

module.exports = app => {
  
  app.get('/atendimentos', (req, res) => {
    res.end('Esta é a rota de atendimentos usando GET');
  })

  app.post('/atendimentos', (req, res) => {
    Atendimento.adiciona(req.body, res)

  })

}