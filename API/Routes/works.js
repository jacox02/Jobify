const express = require("express");

const app = express();
const connection = require("../Database/database");

app.get("/Works/List", (req, res) => {
  connection.query(
    "select * from Categories C, Works W where W.Category_ID = C.Category_ID ORDER BY Publish_Date DESC",
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.get("/myWorks/:ownermail/List", (req, res) => {
  connection.query(
    `SELECT * FROM Works WHERE Owner_Email= '${req.params.ownermail}'`,
    (err, result) => {
      if (err) {
        res.send({
          message: err || "There was an error!",
        });
      } else {
        if (result.length < 1) {
          res.send({
            result: "Not work added yet! Please add One :D",
          });
        } else {
          res.send(result);
        }
      }
    }
  );
});

app.get("/Works/:id/List", (req, res) => {
  if (req.params.id == "1") {
    connection.query(
      `select * from Categories C, Works W where  W.Category_ID = C.Category_ID`,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  } else {
    connection.query(
      `select * from Categories C, Works W WHERE W.Category_ID = C.Category_ID AND W.Category_ID = ${req.params.id}`,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  }
});

app.get("/Works/:searchparam/jobList", (req, res) => {
  connection.query(
    `select * from  Works w
     inner join Categories ca
     on ca.Category_ID  = w.Category_ID
     inner join Companies c
     on c.Company_ID = w.Company_ID
     where w.Location like '%${req.params.searchparam}%'
     or w.Position like '%${req.params.searchparam}%'
     or c.Company_Name like '%${req.params.searchparam}%'
     or w.Work_Title like '%${req.params.searchparam}%'`,
    (err, results) => {
      if (err)
        throw (
          err || {
            message:
              "Hubo un error buscando los trabajos, contacte con soporte tecnico",
          }
        );
      res.send(results);
    }
  );
});

app.get("/Works/:id/Details", (req, res) => {
  connection.query(
    `select * from Categories C, Works W, Companies T where W.Category_ID = C.Category_ID AND W.Work_ID = ${req.params.id} AND W.Company_ID = T.Company_ID ORDER BY Publish_Date DESC;`,
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
