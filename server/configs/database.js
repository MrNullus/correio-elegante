const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "correio_elegante",
});

module.exports = db;

