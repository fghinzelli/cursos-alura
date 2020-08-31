const express = require('./config/custom-express');

express.listen(3000, function() {
	console.log('Servidor rodando na porta 3000');
});


