
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

app.get("/", async function(req,res){
    console.log("on est là");
// on récupere toutes les données dans la table ShortUrl
var shortUrls = await ShortUrlModel.find();
    console.log("short urls: "+shortUrls);
    res.render("index",{shortUrls});
    
})

app.post("/",function(req,res){
    console.log("contenu du formulaire  : "+req.body.urlInput);
    ShortUrlModel.create({fullUrl: req.body.urlInput});

    //On envoie l'utilistauer sur la route "/", ce qui va éxécuter le app.get("/",...)
    // Si j'avais fait un render, le app.get ne serait pas réutilisé et le shortUrls sur le index.ejs serait indéfini
    res.redirect("/");

})

app.get("/:shortUrl",function(req,res){
    console.log(ShortUrlModel.findOne({shortUrl:':shortUrl'}));
   /*  if (ShortUrlModel.findOne({shortUrl:':shortUrl'}) != null){
         console.log("url trouvée dans la BDD");
     }
     else{
         console.log("Url non trouvée dans la base");
     } */
})

app.listen(5000);