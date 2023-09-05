var api = require('../api/grupos')

module.exports = function(app) {
  app.get('/v1/grupos', api.lista)
}