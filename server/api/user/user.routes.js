const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  depositMoney,
} = require("../../controllers/users.controller");

router.post("/create", createUser);
router.post("/login", loginUser);
router.post("/deposit", depositMoney);

module.exports = router;
