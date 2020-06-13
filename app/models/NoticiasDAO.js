function NoticiasDAO(connection) {
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    var sql = 'SELECT id_noticia, titulo, resumo, noticia, autor, data_criacao, data_noticia FROM noticias ORDER BY id_noticia DESC;'
    this._connection.query(sql, callback)
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    var sql = 'SELECT id_noticia, titulo, resumo, noticia, autor, data_criacao, data_noticia FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia
    this._connection.query(sql, callback)
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.getFiveLastNotices = function (callback) {
    var sql = 'SELECT id_noticia, titulo, resumo, noticia, autor, data_criacao, data_noticia FROM noticias ORDER BY id_noticia DESC LIMIT 5;'
    this._connection.query(sql, callback)
}

module.exports = function () {
    return NoticiasDAO;
}