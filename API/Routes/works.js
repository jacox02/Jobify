const express = require("express");

const app = express();
const connection = require("../Database/database");

app.get("/Works/List", (req, res) => {
  connection.query(
    "select * from Categories C, Works W, Companies A where W.Company_ID = A.Company_ID AND W.Category_ID = C.Category_ID ORDER BY Publish_Date DESC",
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});
app.get("/Works/:id/List", (req, res) => {
  if (req.params.id == "1") {
    connection.query(
      `select * from Categories C, Works W, Companies A where W.Company_ID = A.Company_ID AND W.Category_ID = C.Category_ID`,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  } else {
    connection.query(
      `select * from Categories C, Works W, Companies A where W.Company_ID = A.Company_ID AND W.Category_ID = C.Category_ID AND W.Category_ID = ${req.params.id}`,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  }
});
app.get("/Works/:id/Details", (req, res) => {
  connection.query(
    `select * from Categories C, Works W, Companies A where W.Company_ID = A.Company_ID AND W.Category_ID = C.Category_ID and Work_ID = ${req.params.id}`,
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.get("/Works/Categories", (req, res) => {
  connection.query("select * from Categories ", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = app;
