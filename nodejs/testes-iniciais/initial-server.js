var http = require('http')

var server = http.createServer(function(req, res){
	res.end('<h1>Listagem de Produtos</h1>');

});
server.listen(3000);
console.log('servidor rodando')
