// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "pass1234",
//   database: "banking",
// });

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   let userId = null;
//   const responseResult = {};
//   db.query(
//     `SELECT * FROM users WHERE username='${username}' AND password='${password}'`,
//     (err, result) => {
//       const { id, username, name } = result[0];
//       userId = id;
//       console.log(userId);
//       if (err) {
//         console.log(err);
//       } else {
//         responseResult.id = id;
//         responseResult.name = name;
//         responseResult.username = username;
//       }
//       db.query(
//         `SELECT * FROM user_balance WHERE user_id=?`,
//         [userId],
//         (err, result) => {
//           if (err) {
//             console.log(err);
//           } else {
//             responseResult.balance = result[0].balance;
//             res.send(responseResult);
//           }
//         }
//       );
//     }
//   );
// });

// app.post("/create", (req, res) => {
//   const { name, age, contact, username, password } = req.body;
//   db.query(
//     "INSERT INTO users (name, age, contact, username, password) VALUES (?,?,?,?,?)",
//     [name, age, contact, username, password],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("user created ")
//       }
//     }
//   );
//   db.query(
//     `SELECT * FROM users WHERE username='${username}' AND password='${password}'`,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         db.query(`INSERT INTO user_balance (user_id) VALUES (?)`, [
//           result[0].id,
//         ]);
//       }
//     }
//   );
// });

// app.post("/deposit", (req, res) => {
//   const { id, updatepoolalance } = req.body;
//   db.query(
//     "UPDATE user_balance SET balance=? WHERE user_id=?",
//     [updatepoolalance, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("result", result);
//       }
//     }
//   );
// });

// app.listen(3001, () => {
//   console.log("Hello all okay");
//   db.connect((err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Database connected");
//   });
// });
