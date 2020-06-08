var http = require('http')
var server = http.createServer(function(req, res){
    var categoria = req.url

    if(categoria == '/tecnologia')
        res.end('<html><body><h1>Tecnologia</h1></body></html>')
    else if(categoria == '/moda')
        res.end('<html><body><h1>Moda</h1></body></html>')
    else if(categoria == '/beleza')
        res.end('<html><body><h1>Beleza</h1></body></html>')
    else
    res.end('<html><body><h1>Hello World!</h1></body></html>')
})

server.listen(3000)
