let mysql      = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Abcd0000',
  database : 'tutsexpress'
});

connection.connect();


module.exports = connection