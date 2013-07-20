var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
	var fs = require('fs');
	var index = fs.readFileSync(index.html);
	var data = index.toString('utf-8');
	response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
