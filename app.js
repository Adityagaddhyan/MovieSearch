var express = require("express");
var app = express();

const APIkey="497020b3";

app.get("/",function(req,res){
    res.send("<h1>Hello World<h1>");
});






app.listen(8080,function(){
    console.log("The app is running");
});
