const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3303,
  user: 'root',
  password: '123456',
  database: 'agendapetshop'
})

module.exports = conexao;