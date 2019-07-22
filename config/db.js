let mysql      = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'YourPassWord',
  database : 'tutsexpress'
});

connection.connect();


module.exports = connection
