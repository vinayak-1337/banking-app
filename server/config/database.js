require("dotenv").config();
const { createPool } = require("mysql");

const connection = createPool({
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  user: "root",
  host: "localhost",
  password: "pass1234",
  database: "banking",
  connectionLimit: 10,
  multipleStatements: true,
});

// db.query("select * from users", function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

module.exports = connection;
