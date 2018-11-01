
module.exports = function(app){
    app.get('/produtos', function(req, res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'db',
            user: 'root',
            password: 'sys@admin',
            database: 'casadocodigo_nodejs'
        })
        
        connection.query('select * from livros', function(err, results){
            res.send(results);
        });

        connection.end();
    });
};
