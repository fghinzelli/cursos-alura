const Pet = require('../models/pets');

module.exports = app => {
    app.post('/pet', (req, res) => {
        const dados = req.body
        Pet.adiciona(dados, res);
    })
}