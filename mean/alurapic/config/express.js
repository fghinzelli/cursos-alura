var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var consign = require('consign');
app.set('secret', 'homemavestruz')

app.use(express.static('./public'))
app.use(bodyParser.json())

consign({cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes/auth.js')
  .then('routes')
  .into(app);

module.exports = app;