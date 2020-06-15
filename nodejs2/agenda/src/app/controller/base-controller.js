const templates = require('../views/templates');

class BaseController {
  rotas() {
    return {
      home: '/'
    }
  }

  home() {
    return function(req, resp) {
      resp.marko(
        templates.base.home
      )
    }
  }

}