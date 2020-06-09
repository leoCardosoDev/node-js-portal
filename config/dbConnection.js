var mysql = require('mysql');

var ConnMysql = function () {
    console.log('Banco de dados conectado')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'portal_noticias'
    })
}

module.exports = function () {
    return ConnMysql
}