const mysql = require('mysql2');

require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT || 3306,
  connectTimeout: 20000, // 20 segundos
  acquireTimeout: 20000  // 20 segundos
});

const promisePool = pool.promise();

module.exports = promisePool;
