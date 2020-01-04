class LivrosDao {
    constructor(db) {
        this._db = db;
    }

    lista(callback) {
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
}

module.exports = LivrosDao;