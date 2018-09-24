var http = require('http');

var server = http.createServer(function(req, res) {
    res.end('<h1>Hi</h1>');
});

server.listen(3000);

console.log("Servidor rodando na porta 3000");
