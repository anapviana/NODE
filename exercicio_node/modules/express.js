const express = require("express");
const app = express();
const porta = 3000;


app.set("views", "./views");
app.set("view engine", "ejs");

const path = require("path");
app.use(express.static("arquivos"));


app.get("/", function get(req, res){
    res.send("Bem vinde!!");
});


app.get("/Home", function(req, res){
    console.log("Abrindo login")
    res.render("login");

});

app.get("/Calculadora", function(req, res){
    console.log("Abrindo calculadora")
    res.render("calculadora");
});
app.get("/Vitrine", function(req, res){
    console.log("Abrindo vitrine")
    res.render("vitrine");
})






app.listen(porta,() => console.log("Servidor NODEJS no AR na porta 3000"));
