// Connect Node to MySQL.
var mysql = require('mysql');

// Export the Connection.
module.exports = mysql.createConnection ( {
	host: "localhost",
	port: 3000,
	user: root,
	password: "Iwsi2017!",
	database: ""
});