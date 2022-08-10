const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let sitesAcessados = [{'url': 'http://www.caxias.rs.gov.br', 'dataAcesso': '2020-08-31'}]

app.post('/sites', (req, res) => {
  let site = req.body
  if (!site.dataAcesso || !site.url) {
    res.status(400)
    res.end(
      JSON.stringify({
        'mensagem': 'Dados incorretos'
      })
    );
  } else {
    sitesAcessados.push(site);
    res.status(201)
    res.end();
    
  }
  
})

app.get('/sites', (req, res) => {
  res.end(
    JSON.stringify(sitesAcessados)
  )
})

app.listen(3000, () => {
  console.log('API em funcionamento')
})