var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    console.log("on est là");
    res.render("index");
    
})

app.post("/",function(req,res){
    console.log("formulaire envoyer Ok");
    res.render("index");

})

app.listen(5000);