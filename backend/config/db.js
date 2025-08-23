const mysql = require("mysql2");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

console.log("db.js is loaded");
console.log("DB_USER:", process.env.DB_USER);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("DB connection error:", err);
    return;
  }
  console.log("DB connected");
  connection.release();
});

module.exports = pool.promise();
