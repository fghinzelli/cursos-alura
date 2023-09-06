module.exports = function(app) {
  var api = app.api.fotos;
  app.route('/v1/fotos')
    .get(api.lista)
    .post(api.adiciona)

  app.route('/v1/fotos/:id')
    .get(api.buscarPorId)
    .delete(api.removerPorId)
    .put(api.atualiza)
}