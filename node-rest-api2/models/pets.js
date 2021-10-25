const conexao = require('../infraestrutura/conexao');

class Pets {
  adiciona(pet, res) {
    const sql = 'INSERT INTO Pets SET ?';
    conexao.query(sql, pet, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(pet);
      }
    })
  }
}

module.exports = new Pets