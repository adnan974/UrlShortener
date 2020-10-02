
// On appele les modules dont a besoin
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ShortUrlModel = require('./Models/ShortUrlModel')
// 
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,useUnifiedTopology: true});

// middleware qui permet de de dire quel type de langage on va utiliser pour les vues. 
// Ex. Utilise pour faire une render d'une vue avec ejs
app.set("view engine","ejs");

// middleware qui permet de parser une url. 
// Ex. Utile pour recupérer les données d'un formulaire
app.use(bodyParser.urlencoded({extended : false}));

app.get("/",function(req,res){
    console.log("on est là");
    res.render("index");
    
})

app.post("/",function(req,res){
    console.log("contenu du formulaire  : "+req.body.urlInput);
    res.render("index");
    ShortUrlModel.create({fullUrl: req.body.urlInput});

})

app.listen(5000);