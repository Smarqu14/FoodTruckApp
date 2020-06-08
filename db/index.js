const mysql = require('mysql');

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodtruck',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
