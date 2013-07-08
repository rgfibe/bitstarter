var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indexBuff = fs.readFileSync('./index.html');
var indexStr = indexBuff.toString();

app.get('/', function(request, response) {
  response.send(indexStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
