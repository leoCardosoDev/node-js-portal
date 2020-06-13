module.exports = function (application) {
    application.get('/admin', function (req, res) {
        application.app.controllers.admin.form_add_noticia(application, req, res)
    })

    application.post('/noticias/salvar', function (req, res) {
        application.app.controllers.admin.noticia_salvar(application, req, res)

    })
}