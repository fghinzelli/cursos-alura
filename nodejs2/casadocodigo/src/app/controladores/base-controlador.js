const templates = require('../views/templates');

class BaseControlador {
  rotas() {
    return {
      home: '/'
    }
  }
  
  home() {
    return function(req, resp) {
      resp.marko(
        templates.base.home
      );
    }
  }
}

module.exports = BaseControlador;