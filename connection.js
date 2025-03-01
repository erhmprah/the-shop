const mysql = require("mysql");

// Use connection pooling instead of a single connection
const pool = mysql.createPool({
  host: "sql107.infinityfree.com",
  user: "if0_38419850",
  password: "NV4FOA85o5Fx",
  database: "if0_38419850_shop",
  multipleStatements: true, // Allows multiple queries per statement
  port: process.env.DB_PORT || 3306,
});

// Check if the pool is connected
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Cannot connect to database:", err.message);
  } else {
    console.log("Database connected successfully");
    connection.release(); // Release connection back to the pool
  }
});

module.exports = pool; // Export the pool for use in other parts of the app
