var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var request = require("request");
var locus=require("locus");
app.use(bodyParser.urlencoded([true]));

const APIkey="497020b3";

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});
//function to search data from api and return as an object
var keyword;
var resultJSON;
app.post("/search",async function(req,res){
    keyword=req.body.searchword;
    var url="http://www.omdbapi.com/?apikey="+APIkey+"&s="+keyword;
    // eval(locus);
    await request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            resultJSON=JSON.parse(body);
        }
    });
    res.redirect("/result", )
});
app.get("/result",function(req,res){
    console.log(resultJSON);
    // eval(locus);
    res.render("result",{result:resultJSON});
});







app.listen(8888,function(){
    console.log("The app is running");
});
