let mysql      = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'YourPassWord',
  database : 'YourDatabaseName'
});

connection.connect();


module.exports = connection
