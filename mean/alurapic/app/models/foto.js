var mongoose = require('mongoose');

var schema = mongoose.Schema({
  titulo: {
    type: String,
    required: true
  }, 
  url: {
    type: String,
    required: true
  },
  grupo: {
    type: Number,
    required: true
  }, 
  descricao: {
    type: String
  }
})

mongoose.model('Foto', schema);