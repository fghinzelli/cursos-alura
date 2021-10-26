const conexao = require('../infraestrutura/conexao');
const uploadDeArquivos = require('../arquivos/uploadDeArquivos');

class Pets {
  adiciona(pet, res) {
    const sql = 'INSERT INTO Pets SET ?';
    
    uploadDeArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {
      const novoPet = { nome: pet.nome, imagem: novoCaminho };

      if (erro) {
        res.status(400).json({ erro });
      } else {

      }
      conexao.query(sql, novoPet, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(200).json(novoPet);
        }
      });
    })
  }
}

module.exports = new Pets