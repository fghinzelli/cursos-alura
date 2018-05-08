var http = require('http');

var server = http.createServer(function(req, res) {
	res.end('<h1>Server teste</h1>');
});

server.listen(4000);

console.log('Servidor rodando na porta 4000');


