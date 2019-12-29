const app = require('./src/config/custom-express');

const host = 'localhost';
const port = 3000;



app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
})