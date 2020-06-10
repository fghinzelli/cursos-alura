const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

const Livro = require('../modelos/livro');

module.exports = (app) => {
  const rotasLivros = livroControlador.rotas();
  
  app.get(rotasLivros.lista, livroControlador.lista());

  app.route(rotasLivros.cadastro)
    .get(livroControlador.formularioCadastro())
    .post(Livro.validacoes(), livroControlador.cadastra())
    .put(livroControlador.edita());

  app.get(rotasLivros.edicao, livroControlador.formularioEdicao());

  app.delete(rotasLivros.delecao, livroControlador.remove());
};