
const LivroController = require('../controllers/livro-controller');
const livroController = new LivroController();

const Livro = require('../models/livro');

module.exports = (app) => {
    const rotasLivro = livroController.rotas();
    
    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formularioCadastro())
        .post(Livro.validacoes(), livroController.cadastra())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.delete(rotasLivro.exclusao, livroController.remove());
};