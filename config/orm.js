// Import (require) `connection.js` into `orm.js`:
var connection = require('connection.js');

// Declare Functions:
function questionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];
	// Figure this part out.

	return arr.toString();
	}
}

// * In the `orm.js` file, create the methods that will execute 
// the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve 
// and store data in your database.

//     * `selectAll()` 
//     * `insertOne()` 
//     * `updateOne()`
var orm = {
	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb (result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		queryString = queryString + " (";
		queryString = queryString + cols.toString();
		queryString = queryString + ") ";
		queryString = queryString + "VALUES (";
		queryString = queryString + questionMarks(vals.length);
		queryString = queryString + ") ";

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb (result);
		});
	},
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;
			queryString = queryString + " SET";
			queryString = queryString + objToSql(objColVals);
			queryString = queryString + " WHERE";
			queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb (result);
		});
	}
};

// * Export the ORM object in `module.exports`.
module.exports = orm;