SHOW DATABASES;
CREATE DATABASE portal_noticias;
USE portal_noticias;
SHOW TABLES;

create table noticias(
    id_noticia INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    noticia TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;
DESC noticias;
/*
    +--------------+--------------+------+-----+-------------------+-------------------+
    | Field        | Type         | Null | Key | Default           | Extra             |
    +--------------+--------------+------+-----+-------------------+-------------------+
    | id_noticia   | int          | NO   | PRI | NULL              | auto_increment    |
    | titulo       | varchar(100) | YES  |     | NULL              |                   |
    | noticia      | text         | YES  |     | NULL              |                   |
    | data_criacao | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
    +--------------+--------------+------+-----+-------------------+-------------------+
*/

INSERT INTO noticias(titulo, noticia) VALUES('Titulo da notícia', 'Conteudo da notícia');

SELECT id_noticia, titulo, noticia, data_criacao from noticias;
/*
    +------------+--------------------+----------------------+---------------------+
    | id_noticia | titulo             | noticia              | data_criacao        |
    +------------+--------------------+----------------------+---------------------+
    |          1 | Titulo da notícia  | Conteudo da notícia  | 2020-06-08 20:27:03 |
    +------------+--------------------+----------------------+---------------------+
*/


