module.exports = function(app) {
  var mongoose = require('mongoose');
  var jwt = require('jsonwebtoken')
  
  var api = {}
  var model = mongoose.model('Usuario');
  
  api.autentica = function(req, res) {
    model.findOne({login: req.body.login, senha: req.body.senha})
    .then(function(usuario) {
      console.log(usuario)
      if(!usuario) {
        console.log('Login e senha inválidos')
        res.sendStatus(401);
      } else {
        var token = jwt.sign(
          {login: usuario.login},  
          app.get('secret'), 
          {expiresIn: 84600}
        )

        console.log('Token criado e sendo enviado no header da request')
        res.set('x-access-token', token);
        res.end()
      }
    }, error => {
      console.log(error)
      res.status(401).json(error)
    })
  }
  
  api.verificaToken = function(req, res, next) {
    var token = req.headers['x-access-token'];
    if (token) {
      console.log('Verificando token')
      jwt.verify(token, app.get('secret'), function(err, decoded) {
        if (err) {
          console.log('Token rejeitado');
          res.sendStatus(401)
        }
        req.usuario = decoded;
        next();
      })
    } else {
      console.log('Token nao foi enviado')
      res.sendStatus(401)
    }

  }

  return api;
}