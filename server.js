// Node Modules
var express 		= require('express');
var methodOverride 	= require('method-override');
var bodyParser 		= require('body-parser');

// Express Setup
var app 	= express();
var PORT 	= process.env.PORT || 3000;

// Allows Express To Use Static Files
app.use(express.static(path.join(__dirname, 'app/public')));

// Starts The App
app.listen(PORT, function () {
	console.log("App listening on Port " + PORT);
});