module.exports.form_add_noticia = function (application, req, res) {
    res.render('admin/form_add_noticia', {
        validacao: {},
        noticia: {}
    })
}

module.exports.noticia_salvar = function (application, req, res) {
    var noticia = req.body

    req.assert('titulo', 'Campo TÍTULO obrigatório.').notEmpty()
    req.assert('resumo', 'Campo RESUMO obrigatório.').notEmpty()
    req.assert('resumo', 'Resumo deve conter no mínimo 10 e no máximo 100 caracteres').len(10, 100)
    req.assert('autor', 'Campo AUTOR é obrigatório.').notEmpty()
    req.assert('data_noticia', 'Campo DATA DA NOTÍCIA é obrigatório.').notEmpty().isDate({
        format: 'YYYY-MM-DD'
    })
    req.assert('noticia', 'Campo NOTICIA é obrigatório.').notEmpty()

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_noticia', {
            validacao: erros,
            noticia: noticia
        })
        return;
    }

    var connection = application.config.dbConnection()
    var noticiasModel = new application.app.models.NoticiasDAO(connection)

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias')
    })
}