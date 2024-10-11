//Criando constante para alocar as funções do Express
const express = require('express')

//Clonando a variável com as funções do Express para manipular
const exp = express();

//Criando Rotas com Express
exp.get("/", function (req, res){
    res.send("Hello World")
});

exp.get("/test", function (req, res){
    res.send("Hello Test")
});

exp.get("/login/:Username/:Senha", function (req, res){
    res.send("Hello World")
});

//Sempre manter a parte de escutar o servidor no final do Código
exp.listen(3030, function () {
    console.log("Server Online")
})