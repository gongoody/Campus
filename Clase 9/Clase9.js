var myLog = require('./log.js')

myLog.info('El módulo se cargo correctamente')

//Levantar Servidor
var http = require('http')

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('SERVIDOR ACTIVO')
    res.end()
})

server.listen(5000)