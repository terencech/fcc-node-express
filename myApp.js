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
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") { message = message.toUpperCase() };
    res.json({ "message": message });
});






























 module.exports = app;
