const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: '10.241.12.6',
    port: 3303,
    user: 'root',
    password: '123456',
    database: 'agendapetshop'
})

module.exports = conexao;