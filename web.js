var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var indexBuff = fs.readFileSync('./index.html');
    var indexStr = indexBuff.toString();
  response.send(indexStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
