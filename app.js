var app = require('./config/server')

var rotaNoticias = require('./app/routes/noticias')(app)
var rotaHome = require('./app/routes/home')(app)
var rotaAdmin = require('./app/routes/form_add')(app)

app.listen(3000, function(){
    console.log('Servidor ON')
})
