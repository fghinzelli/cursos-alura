var restify = require('restify');

var cliente = restify.createJsonClient({
  url: 'http://localhost:3001'
});

var cartao

cliente.post('/cartoes/autoriza', cartao,
  function(erro, req, res, retorno) {
    console.log('Consumindo servico de cartoes');
    console.log(retorno);
})