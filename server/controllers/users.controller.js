const connection = require("../config/database");
const bcrypt = require("bcrypt");
// const express = require('express');

exports.createUser = async (req, res) => {
  const { name, age, contact, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    let sql1 =
      "INSERT INTO users (name, age, contact, username, password) VALUES (?,?,?,?,?);";
    let sql2 = "SELECT id from users WHERE username=?";
    connection.query(
      sql1 + sql2,
      [name, age, contact, username, hashedPassword, username],
      (err, results) => {
        if (err) return res.send(err);
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
  } catch (error) {}
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  const responseResult = {};
  connection.query(
    `SELECT * FROM users WHERE username='${username}'`,
    async (err, result) => {
      if (!result.length) return res.send("user not found");
      try {
        if (await bcrypt.compare(password, result[0].password)) {
          const { id, username, name } = result[0];
          if (err) {
            console.log(err);
          } else {
            responseResult.id = id;
            responseResult.name = name;
            responseResult.username = username;
          }
        } else {
          return res.send("incorrect password");
        }
      } catch (error) {
        console.log(error);
      }
      connection.query(
        `SELECT * FROM user_balance WHERE user_id=?`,
        [result[0].id],
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
  const { id, amount } = req.body;
  connection.query(
    "UPDATE user_balance SET balance=balance+? WHERE user_id=?",
    [amount, id],
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
};

exports.transferMoney = (req, res) => {
  const { senderId, recieverUsername, amount } = req.body;
  connection.query(
    "SELECT id FROM users WHERE username=?",
    [recieverUsername],
    (err, result) => {
      if (err) return res.send(err);
      connection.query(
        "UPDATE user_balance SET balance=balance+? WHERE user_id=?",
        [amount, result[0].id],
        (err, result) => {
          if (err) return res.send(err);
          connection.query(
            "UPDATE user_balance SET balance=balance-? WHERE user_id=?",
            [amount, senderId],
            (err, result) => {
              if (err) return res.send(err);
              return res.send(result);
            }
          );
        }
      );
    }
  );
};
