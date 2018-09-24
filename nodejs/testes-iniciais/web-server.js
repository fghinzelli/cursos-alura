var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/produtos') {
        res.end('<h1>Listagem de produtos</h1>');
    } else {
        res.end('<h1>Home</h1>');
    }
    
});

server.listen(3000);

console.log("Servidor rodando na porta 3000");
