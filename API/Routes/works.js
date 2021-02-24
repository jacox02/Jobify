const express = require("express");
const app = express();
const connection = require("../Database/database");

const { formatData } = require("../assets/dateFormated");

app.get("/Works/List", (req, res) => {
  connection.query(
    "select * from Categories C, Works W where W.Category_ID = C.Category_ID ORDER BY Publish_Date DESC",
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.post("/works/add/", (req, res) => {
  const {
    title,
    ownermail,
    keyword,
    joburl,
    worktype,
    worklocation,
    position,
    applyMethodMail,
    applymethod,
    description,
    categoryid,
  } = req.body;

  const newJob = {
    Work_Title: title,
    Publish_Date: formatData(),
    Owner_Email: ownermail,
    Work_Keywords: keyword,
    Job_URL: joburl,
    WorkType: worktype,
    Location: worklocation,
    Position: position,
    Email: applyMethodMail,
    Apply_Method: applymethod,
    Owner_Email: ownermail,
    Description: description,
    createdAt: formatData(),
    updatedAt: formatData(),
    Category_ID: categoryid,
  };
  console.log(newJob);
  connection.query("INSERT INTO works set ?", [newJob]);
});

app.get("/myWorks/:ownermail/List", (req, res) => {
  connection.query(
    `SELECT * FROM works WHERE Owner_Email= '${req.params.ownermail}'`,
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
      `select * from categories C, works W where  W.Category_ID = C.Category_ID`,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  } else {
    connection.query(
      `select * from categories C, works W WHERE W.Category_ID = C.Category_ID AND W.Category_ID = ${req.params.id}`,
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
/*
 *DELETED W.Company_ID = T.Company_ID
 *And produces a fronted error cause in fronted requires the company name
 */
app.get("/Works/:id/Details", (req, res) => {
  connection.query(
    `select * from works where Work_ID = ${req.params.id}`,
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

app.get("/Works/Categories", (req, res) => {
  connection.query("select * from categories ", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = app;
