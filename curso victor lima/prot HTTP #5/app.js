var http = require('http');

// qual porta vamos abrir
http.createServer(function(req,res){
    res.end("Hello world welcome to my website")
}).listen(8081);

console.log("O servdior esta rodando!")