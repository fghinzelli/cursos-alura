const conexao = require('../infraestrutura/conexao');
const moment = require('moment');

class Atendimentos {
  
  adiciona(atendimento, res) {

    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.length > 5

    const validacoes = [
      {
        nome: 'data',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)

    if (erros.length) {
      res.status(400).json(erros)
    } else {
      const atendimentoDatado = {...atendimento, dataCriacao, data}
      const sql = 'INSERT INTO Atendimentos SET ?'
      
      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro)
        } else {
          res.status(201).json(atendimento)
        }
      })
    }

  }

  lista(res) {
    const sql = "SELECT * FROM Atendimentos";

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados[0])
      }
    })
  }

  atualiza (id, dados, res) {
    dados.data = moment(dados.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const sql = "UPDATE Atendimentos SET ? WHERE id = ?"

    conexao.query(sql, [dados, id], (erros, resultados) => {
      if (erros) {
        res.status(400).json(erros)
      } else {
        res.status(200).json({...dados, id})
      }
    })
  }

  deleta (id, res) {
    const sql = `DELETE FROM Atendimentos WHERE id = ${id}`

    conexao.query(sql, (erros, resultados) => {
      if (erros) {
        res.status(400).json(erros)
      } else {
        res.status(203).json({id})
      }
    })
  }
}

module.exports = new Atendimentos()