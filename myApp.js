var express = require('express');
var app = express();

console.log("Hello World");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});
































 module.exports = app;
