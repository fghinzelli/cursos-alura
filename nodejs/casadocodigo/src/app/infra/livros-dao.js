class LivrosDao {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) { 
                        return reject('Não foi possível buscar os dados');
                    } else {
                        return resolve(resultados);
                    }
                }
            );
        });
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO LIVROS (
                titulo, preco, descricao
                ) VALUES (?, ?, ?)   
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function(err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro');
                    } 
                    resolve()
                }
                )

        });
    }

    buscarPorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`
                SELECT * FROM livros WHERE id = ?`, 
                [id],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro')
                    }
                    return resolve(livro);
            })
        })
    }

    atualiza(livro) {
        console.log(livro);
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET 
                    titulo = ?,
                    preco = ?,
                    descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ], err => {
                if (err) {
                    return reject('Não foi possível atualizar o livro')
                }
                resolve();
            })
        })
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                DELETE FROM livros WHERE id = ?`, 
                [id], 
                err => {
                    if (err) {
                        return reject('Não foi possível excluir o livro')
                    }
                    resolve();
                })
        })
    }
}

module.exports = LivrosDao;