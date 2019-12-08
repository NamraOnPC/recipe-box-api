var express = require("express");
var app = express();
var  path = require("path");
var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./package.json');
var HTTP_PORT = process.env.PORT || 8082;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/src/index.html"));
});

// route to display api docs using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// setup another route to listen on /about
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,"/index.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);