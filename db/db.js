// backend/db.js
const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
});

// Export the connection pool
module.exports = pool;
