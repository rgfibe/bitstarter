var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var htmlFile = "./index.html";
var htmlBuff = fs.readFileSync(htmlFile);
var htmlStr = htmlBuff.toString();

app.get('/', function(request, response) {
  response.send(htmlStr);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
