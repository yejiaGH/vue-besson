var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leave');
var leaveSchema = new mongoose.Schema({
	title: String,
	content: String,
	createAt: {type: Date, default: Date.now}
});
mongoose.model('Leave', leaveSchema);
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(8083);
console.log('server start at port 8083 ... ');
app.get('/', function(req, res) {
	res.sendFile('./15.leave.html', {root: __dirname});
	console.log('default page 15.leave.html');
});
app.post('/leaves', function(req, res) {
	var data = req.body;
	console.log(data);
	mongoose.model('Leave').create(data, function(err, doc) {
		res.send(doc);
	});
});