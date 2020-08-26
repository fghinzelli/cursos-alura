var mysql = require('mysql');

function createDBConnection(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'financas',
    port: 3306,
    password: 'financas',
    database: 'financas'
  });
}

module.exports = function() {
  return createDBConnection;
}