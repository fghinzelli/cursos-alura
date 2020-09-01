var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();

console.log('Executando thread');
if (cluster.isMaster) {
  console.log('thread master');
  cpus.forEach(function() {
    cluster.fork();
  })

  cluster.on('listening', function(worker) {
    console.log('Cluster conectado ' + worker.process.pid);
  });

  cluster.on('exit', worker => {  
    console.log('cluster %d desconectado', worker.process.pid);
    cluster.fork();
  })
} else {
  console.log('thread slave')
  require('./server.js')
}
