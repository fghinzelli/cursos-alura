const { check } = require('express-validator/check');
const LivroController = require('../controllers/livro-controller');
const livroController = new LivroController();

const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

module.exports = (app) => {
    const rotasBase = baseController.rotas();
    const rotasLivro = livroController.rotas();
    
    app.get(rotasBase.home, baseController.home());

    app.get(rotasLivro.lista, livroController.lista());

    app.get(rotasLivro.cadastro, livroController.formularioCadastro());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.post(rotasLivro.lista, [
            check('titulo').isLength({min: 5}).withMessage('O título precisa ter no mínimo 5 caracters'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido')
        ], 
        livroController.cadastra()
    );

    app.put(rotasLivro.lista, livroController.edita());

    app.delete(rotasLivro.exclusao, livroController.remove());
};