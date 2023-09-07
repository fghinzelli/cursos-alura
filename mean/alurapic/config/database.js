module.exports = function(uri) {
  var mongoose = require('mongoose');
  
  mongoose.connect('mongodb://' + uri);
  
  mongoose.connection.on('connected', () => {
    console.log('Conectado ao Mongo');
  });

  mongoose.connection.on('error', error => {
    console.log('Erro na conexão ' + error)
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Desconectado do Mongo');
  })

  process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
      console.log('Aplicação terminada, conexão fechada')
      process.exit(0);
    })
  })
}
