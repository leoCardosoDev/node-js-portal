module.exports = function(){

    this.getNoticias = function(connection, callback){
        var sql = 'select id_noticia, titulo, noticia, data_criacao from noticias'
        connection.query(sql, callback)
    }

    this.getNoticia = function(connection, callback){
        var sql = 'select id_noticia, titulo, noticia, data_criacao from noticias where id_noticia = 2'
        connection.query(sql, callback)
    }

    return this;
}