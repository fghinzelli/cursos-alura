var mongoose = require('mongoose');

var api = {}
var model = mongoose.model('Foto');

api.lista = (req, res) => {
  model.find().then((error, fotos) => {
    if (error) {
      console.log(error)
      res.status(500).json(error);
    }
    res.json(fotos)
  })
}

api.buscarPorId = (req, res) => {
  
}

api.removerPorId = (req, res) => {

}

api.adiciona = (req, res) => {
  
}

api.atualiza = (req, res) => {
  
}
module.exports = api;