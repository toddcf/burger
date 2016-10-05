// Inside burger.js, import orm.js into burger.js
var orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the 
// ORM functions using burger specific input for the ORM.
var burger = {
	selectAll: function(cb) {
		orm.selectAll(function(result) {
			cb(result);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export at the end of the burger.js file.
module.exports = burger;