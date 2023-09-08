var mongoose = require('mongoose');

var api = {}
var model = mongoose.model('Foto');

api.lista = (req, res) => {
  model.find()
    .then(fotos => {
      res.json(fotos)
    }, (error) => {
      console.log(error)
      res.status(500).json(error);
    })
}

api.buscarPorId = (req, res) => {
  model
    .findById(req.params.id)
    .then((foto) => {
      if(!foto) throw Error('Foto não encontrada');
      res.json(foto)
    }, error => {
      console.log(error)
      res.status(500).json(error)
    })
}

api.removerPorId = (req, res) => {
  model
    .deleteOne({_id: req.params.id})
    .then(() => {
      res.sendStatus(204)
    }, error => {
      console.log(error)
      res.status(500).json(error)
    })
}

api.adiciona = (req, res) => {
  model
    .create(req.body) 
    .then(foto => {
      res.status(201).json(foto);
    }, error => {
      console.log(error)
      res.status(500).json(error)
    })
}

api.atualiza = (req, res) => {
  model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(foto => {
      res.status(200).json(foto)
    }, error  => {
      console.log(error)
      res.status(500).json(error)
    })
}
module.exports = api;