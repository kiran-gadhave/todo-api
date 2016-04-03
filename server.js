var express = require('express'),
	app		= express(),
	bodyParser = require('body-parser'),
	PORT	= process.env.PORT || 3000;

// var todos = [{
// 	id: 1, 
// 	desc: "Goto Office",
// 	status: false
// }, {
// 	id: 2,
// 	desc: "Goto Market",
// 	status: false
// }, {
// 	id:3,
// 	desc: "Goto HEll",
// 	status: true
// }];

app.use(bodyParser.json());

var todoNextId = 1;
var todos = [];

app.get('/', function(req, res){
	res.send('TODO API ROOT');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var flag = false;
	var selItem;
	for(item of todos){
		if(item.id == req.params.id){
			flag = true;
			selItem = item;
		}
	}
	if(flag)
		res.json(selItem);
	else
		res.status(404).send();
});

app.post('/todos', function(req, res){
	var body = req.body;
	body.id = todoNextId;
	todoNextId = todoNextId + 1;
	todos.push(body);
	res.json(todos);
});

app.listen(PORT, function(error){
	if(error)
		console.log('Error: ' + error);
	else
		console.log('Server up on ' + PORT);
});