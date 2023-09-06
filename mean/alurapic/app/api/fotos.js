var api = {}
var fotos = [
  {_id: 1, titulo: 'Leão', url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_1800x1800.jpg'},
  {_id: 2, titulo: 'Leão 2', url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_1800x1800.jpg'}
];

var CONTADOR_ID = 2;

api.lista = (req, res) => {
  

  res.json(fotos);
}

api.buscarPorId = (req, res) => {
  return res.json(fotos.filter(foto => foto._id == req.params.id)[0])
}

api.removerPorId = (req, res) => {
  fotos = fotos.filter(foto => foto._id !== req.params.id)
  res.sendStatus(204)
}

api.adiciona = (req, res) => {
  var foto = req.body;
  foto._id = ++CONTADOR_ID;
  fotos.push(foto);
  res.json(foto);
}

api.atualiza = (req, res) => {
  var foto = req.body;
  var indice = fotos.findIndex(foto => foto._id == req.params.id)
  fotos[indice] = foto;
  res.sendStatus(200);
}

module.exports = api;

