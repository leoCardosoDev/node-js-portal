function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
    var sql = 'SELECT id_noticia, titulo, resumo, noticia, autor, data_criacao, data_noticia FROM noticias;'
    this._connection.query(sql, callback)
}

NoticiasDAO.prototype.getNoticia = function(callback){
    var sql = 'SELECT id_noticia, titulo, resumo, noticia, autor, data_criacao, data_noticia FROM noticias WHERE id_noticia = 2'
    this._connection.query(sql, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback)
}

module.exports = function(){
    return NoticiasDAO;
}
