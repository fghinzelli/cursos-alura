const express = require('express');
require('marko/node-require').install();
require('marko/express');
const app = express();

let rotas = require('../app/rotas/rotas')
rotas(app);

module.exports = app;