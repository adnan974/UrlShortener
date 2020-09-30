var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : false}));

app.get("/",function(req,res){
    console.log("on est là");
    res.render("index");
    
})

app.post("/",function(req,res){
    console.log("contenu du formulaire  : "+req.body.urlInput);
    res.render("index");

})

app.listen(5000);