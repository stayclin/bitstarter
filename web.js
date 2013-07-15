var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var filename = "index.html";

var data = fs.readFileSync(filename).toString();

app.get('/', function(request, response) {
  response.send(data);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
