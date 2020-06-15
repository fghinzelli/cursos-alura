require('marko/node-require').install();
require('marko/express');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const templates = require('../app/views/templates');

// app.use('/estatico', express.static('src/app/public'));

// app.use(bodyParser.urlencoded({
//   extended: true
// }))


module.exports = app;