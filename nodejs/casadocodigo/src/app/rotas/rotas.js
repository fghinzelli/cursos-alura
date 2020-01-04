const LivrosDao = require('../infra/livros-dao')
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h1>Home</h1>');
    });
    
    app.get('/livros', (req, res) => {
        const livrosDao = new LivrosDao(db);
        livrosDao.lista()
        .then(resultados => {
            res.marko(
                require('../views/livros/lista/lista.marko'), 
                {
                    livros: resultados
                }
            );
        }).catch(error => console.log(error));
    });
};

