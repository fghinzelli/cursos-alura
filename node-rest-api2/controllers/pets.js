const Pets = require('../models/pets');

module.exports = app => {
  app.post('/pet', (req, res) => {
    Pets.adiciona(req.body, res);
  })
}