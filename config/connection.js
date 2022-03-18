const mysql = require('mysql2');
require('dotenv').config();

const db = new mysql(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    user:'root',
    database: 'employeedb'
  });

module.exports = db;


//mysql.createConnection