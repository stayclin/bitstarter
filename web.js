var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var filename = "index.html";
fs.stat(filename, function(error,stats){
    fs.open(filename, "r", function(error, fd){
	var buffer = new Buffer(stats.size);
	fs.readSync(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer){
	    var data = buffer.toString("utf8", 0, buffer.length);
	    console.log(data);
	    fs.close(fd);
	});
    });
});


var buf = new Buffer("Hello Stacy");

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
