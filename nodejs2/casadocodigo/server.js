const app = require('./src/config/custom-express');

const host = 'localhost';
const port = 4000;

app.listen(port, () => {
    console.log('Servidor rodando na porta 4000')
})
