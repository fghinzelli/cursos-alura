const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const roteador = require('./rotas/fornecedores');
const NaoEncontrado = require('../api/erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');

app.use(bodyParser.json());

app.use('/api/fornecedores', roteador);

app.use((erro, req, res, proximo) =>{

    let status = 500

    if (erro instanceof NaoEncontrado) {
        status = 404
    } 
    
    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
        status = 400
    }

    res.status(status)

    res.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => {
    console.log('Listen on port ' + config.get('api.porta'));
})

