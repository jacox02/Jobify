const express = require("express");
const mysql = require("mysql");

const app = express();
const connection = require("../Database/database");

app.get("/Categories", (req, res) => {
  connection.connect();
  connection.query("Select * from Categories", (err, results, fields) => {
    if (err) throw err;
    res.send({
      message: "Getting categories",
      code: 200,
      data: results,
    });
  });
  connection.end();
});

module.exports = app;
