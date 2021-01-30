const express = require("express");

const app = express();
const connection = require("../Database/database");

app.get("/Works/List", (req, res) => {
  connection.connect();
  connection.query(
    "select * from Categories C, Works W, Companies A where W.Company_ID = A.Company_ID AND W.Category_ID = C.Category_ID",
    (err, results) => {
      if (err) throw err;
      res.send({
        message: "Getting works",
        code: 200,
        data: results,
      });
    }
  );
});

app.get("/Works/:id/Details", (req, res) => {
  connection.connect();
  connection.query(
    `select * from Categories C, Works W, Companies A where W.Company_ID = A.Company_ID AND W.Category_ID = C.Category_ID and Work_ID = ${req.params.id}`,
    (err, results) => {
      if (err) throw err;
      res.send({
        message: "Getting works",
        code: 200,
        data: results,
      });
    }
  );
});

module.exports = app;
