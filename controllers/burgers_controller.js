// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
var express = require('express');
var burger 	= require('../models/burger.js');

// Create the router for the app...
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/new', function (req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.burger, 0], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function(req, res){
	var condition = req.params.id;
	burger.deleteOne('id', condition, function(){
		res.redirect('/burgers');
	});
});

// ...and export the router at the end of your file:
module.exports = router;