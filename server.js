// Node Modules
var express 		= require('express');
var methodOverride 	= require('method-override');
var bodyParser 		= require('body-parser');
var path			= require('path');

// Express Setup
var app 	= express();
var PORT 	= process.env.PORT || 3000;

// Allows Express To Use Static Files
app.use(express.static(path.join(__dirname, 'app/public')));

// Allows Express To Parse Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Starts The App
app.listen(PORT, function () {
	console.log("App listening on Port " + PORT);
});