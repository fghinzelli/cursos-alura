var api = {}

api.lista = (req, res) => {
  var fotos = [
    {_id: 1, titulo: 'Leão', url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_1800x1800.jpg'},
    {_id: 2, titulo: 'Leão 2', url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_1800x1800.jpg'}
  ];

  res.json(fotos);

}
module.exports = api;

