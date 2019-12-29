
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h1>Home</h1>');
    });
    
    app.get('/livros', (req, res) => {
        res.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
};

