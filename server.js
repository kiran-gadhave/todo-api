var express = require('express'),
	app		= express(),
	PORT	= process.env.PORT || 3000;

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

app.get('/', function(req, res){
	res.send('TODO API ROOT');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	
});

app.listen(PORT, function(error){
	if(error)
		console.log('Error: ' + error);
	else
		console.log('Server up on ' + PORT);
});