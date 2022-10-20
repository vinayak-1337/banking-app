const express = require("express");
const app = express();
const router = require("./api/user/user.routes");
const cors = require("cors");
// const pool = require("./config/database");
app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(3001, () => {
  console.log("Hello all okay");
});
