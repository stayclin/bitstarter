var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var filename = "index.html";


var data = fs.readFileSync(filename, "utf-8");




var buf = new Buffer("Hello Stacy");

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
