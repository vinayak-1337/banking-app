const connection = require("../config/database");
// const bcrypt = require('bcrypt');
// const express = require('express');

exports.createUser = (req, res) => {
  const { name, age, contact, username, password } = req.body;
  let sql1 =
    "INSERT INTO users (name, age, contact, username, password) VALUES (?,?,?,?,?);";
  let sql2 = "SELECT id from users WHERE username=? AND password=?";
  connection.query(
    sql1 + sql2,
    [name, age, contact, username, password, username, password],
    (err, results) => {
      if (err) console.log(err);
      // res.send(results[1]);
      console.log(results[1][0].id);
      connection.query(
        "INSERT INTO user_balance (user_id) VALUES (?)",
        [results[1][0].id],
        (err, results) => {
          if (err) console.log(err);
          res.send(results);
        }
      );
    }
  );
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  let userId = null;
  const responseResult = {};
  connection.query(
    `SELECT * FROM users WHERE username='${username}' AND password='${password}'`,
    (err, result) => {
      const { id, username, name } = result[0];
      userId = id;
      console.log(userId);
      if (err) {
        console.log(err);
      } else {
        responseResult.id = id;
        responseResult.name = name;
        responseResult.username = username;
      }
      connection.query(
        `SELECT * FROM user_balance WHERE user_id=?`,
        [userId],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            responseResult.balance = result[0].balance;
            res.send(responseResult);
          }
        }
      );
    }
  );
};
exports.depositMoney = (req, res) => {
  const { id, updatedBalance } = req.body;
  connection.query(
    "UPDATE user_balance SET balance=? WHERE user_id=?",
    [updatedBalance, id],
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
};
