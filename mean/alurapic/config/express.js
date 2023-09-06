var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var consign = require('consign');

app.use(express.static('./public'))
app.use(bodyParser.json())

consign({cwd: 'app'})
  .include('api')
  .then('routes')
  .into(app);

module.exports = app;