var express = require('express'),
	app		= express(),
	PORT	= process.env.PORT || 3000;

app.get('/', function(req, res){
	res.send('TODO API ROOT');
});



app.listen(PORT, function(error){
	if(error)
		console.log('Error: ' + error);
	else
		console.log('Server up on ' + PORT);
})