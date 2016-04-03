var express 	= require('express'),
	app			= express(),
	bodyParser 	= require('body-parser'),
	_			= require('underscore'),
	PORT		= process.env.PORT || 3000;

var todos = [];

var todos = [{
	id: 1, 
	desc: "Goto Office",
	status: false
}, {
	id: 2,
	desc: "Goto Market",
	status: false
}, {
	id:3,
	desc: "Goto HEll",
	status: true
}];

app.use(bodyParser.json());

var todoNextId = 1;

app.get('/', function(req, res){
	res.send('TODO API ROOT');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var selItem;
	// for(item of todos){
	// 	if(item.id == req.params.id){
	// 		flag = true;
	// 		selItem = item;
	// 	}
	// }

	selItem = _.findWhere(todos, {id: parseInt(req.params.id, 10)});
	
	// if(selItem)
		res.json(selItem);
	// else
		// res.status(404).send();
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