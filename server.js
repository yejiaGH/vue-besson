var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(8083);
console.log('server start at port 8083 ... ');
app.get('/getUser', function(req, res) {
	res.send([{
		name: 'alice',
		age: 20
	}]);
});
app.get('/', function(req, res) {
	res.sendFile('./get.html', {root: __dirname});
});
