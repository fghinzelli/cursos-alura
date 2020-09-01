const PagamentoDao = require("../persistencia/PagamentoDao");
var logger = require("../servicos/logger.js");
const PAGAMENTO_CRIADO = "CRIADO";
const PAGAMENTO_CONFIRMADO = "CONFIRMADO";
const PAGAMENTO_CANCELADO = "CANCELADO";


module.exports = function(app) {
  app.get('/pagamentos', function(req, resp) {
    resp.end('Home pagamentos!');
  });

  app.get('/pagamentos/pagamento/:id', function(req, res) {
    var id = req.params.id
    
    logger.info('COnsultando pagamento: ' + id);

    var memcachedClient = app.servicos.memcachedClient();

    memcachedClient.get('pagamento-' + id, function(erro, retorno) {
      if(erro || !retorno) {
        console.log('MISS - Não encontrado');
      } else {
        console.log('HIT - valor: ' + JSON.stringify(retorno))
      }
    });

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.buscaPorId(id, function(erro, resultado) {
      if (erro) {
        console.log('Ocorreu um erro ao buscar o id');
        res.status(500).send(erro);
        return;
      }
      res.json(resultado);
    })
  })

  app.delete('/pagamentos/pagamento/:id', function(req, resp) {
    var id = req.params.id;

    var pagamento = {}
    pagamento.id = id;
    pagamento.status = PAGAMENTO_CANCELADO;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.atualiza(pagamento, function(erro, result) {
      if(erro) {
        console.log("Não foi possível excluir os dados: ", erro);
        resp.status(500).send(erro);
      } else {
        resp.status(204).send(pagamento);
      }
    })
  })

  app.put('/pagamentos/pagamento/:id', function(req, resp) {
    var pagamento = {}
    var id = req.params.id;
    pagamento.id = id;
    pagamento.status = PAGAMENTO_CONFIRMADO;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.atualiza(pagamento, function(erro, result) {
      if (erro) {
        console.log("Ocorreu um erro ao salvar os dados: " + erro);
        resp.status(500).send(erro);
      } else {
        resp.send(pagamento);
      }
    });
  })

  app.post('/pagamentos/pagamento', function(req, resp) {
    
    req.assert("pagamento.forma_de_pagamento", "Forma de pagamento é obrigatória").notEmpty();
    req.assert("pagamento.valor", 
      "Valor é obrigatório e deve ser decimal")
      .notEmpty().isFloat();
    var erros = req.validationErrors();

    if(erros) {
      console.log("Erros de validação encontrados");
      resp.status(400).send(erros);
      return;
    } 

    var pagamento = req.body["pagamento"];
    
    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamento.status = PAGAMENTO_CRIADO;
    pagamento.data = new Date;

    pagamentoDao.salva(pagamento, function(erro, result){
      if (erro) {
        console.log("Erro ao inserir no banco: " + erro)
        resp.status(500).send(erro);
      } else {
        pagamento.id = result.insertId;

        var memcachedClient = app.servicos.memcachedClient();

        memcachedClient.set('pagamento-' + pagamento.id, pagamento, 6000, function(erro) {
          console.log('Nova chave adicionada ao cache: pagamento-' + pagamento.id);
        })
        

        if (pagamento.forma_de_pagamento == 'cartao') {
          var cartao = req.body["cartao"];
          console.log(cartao);

          var clienteCartoes = new app.servicos.ClienteCartoes();
          clienteCartoes.autoriza(cartao, 
            function(exception, request, response, retorno) {
              if (exception) {
                console.log(exception);
                resp.status(400).send(exception);
                return;
              }
              resp.location('/pagamentos/pagamento/' + result.insertId);
   
              var response = {
                dados_do_pagamento: pagamento,
                cartao: retorno,
                links: [
                  {
                    href: "http://localhost:3000/pagamentos/pagamento/" + result.insertId,
                    rel: "confirmar",
                    method: "PUT"
                  },
                  {
                    href: "http://localhost:3000/pagamentos/pagamento/" + result.insertId,
                    rel: "cancelar",
                    method: "DELETE"
                  }
                ]
              }

              resp.status(201).json(response);
          });

          

          
        } else {
          resp.location('/pagamentos/pagamento/' + result.insertId);
   
          var response = {
            dados_do_pagamento: pagamento,
            links: [
              {
                href: "http://localhost:3000/pagamentos/pagamento/" + result.insertId,
                rel: "confirmar",
                method: "PUT"
              },
              {
                href: "http://localhost:3000/pagamentos/pagamento/" + result.insertId,
                rel: "cancelar",
                method: "DELETE"
              }
            ]
          }
          resp.status(201).json(response);
        }

      }
    });
  });
}