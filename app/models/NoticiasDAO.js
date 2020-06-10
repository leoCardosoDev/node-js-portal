function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
    var sql = 'select id_noticia, titulo, noticia, data_criacao from noticias'
    this._connection.query(sql, callback)
}

NoticiasDAO.prototype.getNoticia = function(callback){
    var sql = 'select id_noticia, titulo, noticia, data_criacao from noticias where id_noticia = 2'
    this._connection.query(sql, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback)
}

module.exports = function(){
    return NoticiasDAO;
}
