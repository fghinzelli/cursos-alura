var mysql = require('mysql');

const casa = {
  host: 'localhost',
  user: 'financas',
  port: 3306,
  password: 'financas',
  database: 'financas'
};

const pmcs = {
  host: '10.241.12.6',
  user: 'mariadb-user',
  port: 3307,
  password: 'mariadb-pwd',
  database: 'mariadb-localhost'
};

function createDBConnection(){
  return mysql.createConnection(casa);
}

module.exports = function() {
  return createDBConnection;
}