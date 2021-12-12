require('dotenv').config();
var express = require('express');
var app = express();


console.log("Hello World");

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
    res.json(process.env.MESSAGE_STYLE === "uppercase" ? {"message": "HELLO JSON"} : {"message": "Hello json"});
});






























 module.exports = app;
