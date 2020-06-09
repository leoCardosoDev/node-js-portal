module.exports = function (app) {

    app.get('/noticias', function (req, res) {
        var connection = app.config.dbConnection();
        var sql = 'select id_noticia, titulo, noticia, data_criacao from noticias'
        connection.query(sql, function (error, result) {
            res.render('noticias/noticias', {noticias: result})
        })
    })
}