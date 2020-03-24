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

    app.get('/livros/form', (req, res) => {
        res.marko(require('../views/livros/form/form.marko'), { livro: {}});
    })

    app.post('/livros', (req, res) => {
        const livrosDao = new LivrosDao(db);
        livrosDao.adiciona(req.body)
        .then(res.redirect('/livros'))
        .catch(erro => console.log(erro));
    })

    app.get('/livros/form/:id', (req, res) => {
        const livrosDao = new LivrosDao(db);
        livrosDao.buscarPorId(req.params.id)
        .then(livro => {
            res.marko(require('../views/livros/form/form.marko'),
            { livro: livro })
        })
        .catch(erro => console.log(erro))
    })

    app.put('/livros', (req, res) => {
        const livrosDao = new LivrosDao(db);
        livrosDao.atualiza(req.body)
        .then(res.redirect('/livros'))
        .catch(erro => console.log(erro))
    })

    app.delete('/livros/:id', (req, res) => {
        const livrosDao = new LivrosDao(db);
        livrosDao.remove(req.params.id)
        .then(() => res.status(200).end())
        .catch(erro => console.log(erro))
    })
};

