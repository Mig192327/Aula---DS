var server = require('http')

server.createServer(function (req, res){
    res.end("<h1>" + "Hello World" + "</h1>")
}).listen(6969);

console.log("O servidor está on-line" )