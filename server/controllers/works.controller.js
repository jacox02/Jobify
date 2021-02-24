const db = require("../models");
const Work = db.works;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Tittle cant be empty",
    });
    return;
  }
  const work = {
    Work_Title: req.body.title,
    Category_ID: req.body.categoryId,
    Publish_Date: req.body.date,
    Work_Keywords: req.body.keywords,
    Job_URL: req.body.joburl,
    WorkType: req.body.worktype,
    Location: req.body.location,
    Position: req.body.position,
    Email: req.body.email,
    Owner_Email: req.body.ownerEmail,
    Apply_Method: req.body.applymethod,
    Description: req.body.description,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  Work.create(work)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "There was an error, try again, if problem keeps happening, please contact support",
      });
    });
};

exports.findAll = (req, res) => {
  Work.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message:
          err ||
          "There was an error, try again, if problem keeps happening, please contact support",
      });
    });
};

exports.findOneByID = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Work.findByPk(id)
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.send({
        message:
          err ||
          "There was an error, try again, if problem keeps happening, please contact support",
      });
    });
};

exports.findOneByTitle = (req, res) => {};

exports.update = (req, res) => {
  const id = req.body.Work_ID;

  Work.update(req.body, {
    where: { Work_ID: id },
  })
    .then((code) => {
      if (code == 1) {
        res.send({
          message: "Work updated successfuly",
        });
      } else {
        res.send({
          message: `There was an error, try again, if problem keeps happening, please contact support`,
        });
      }
    })
    .catch((err) => {
      res.send({
        message:
          err ||
          "There was an error, try again, if problem keeps happening, please contact support",
      });
    });
};
exports.delete = (req, res) => {
  Work.destroy({
    where: {},
    truncate: false,
  })
    .then((qty) => {
      res.send({
        message: `${qty} Work where deleted!`,
      });
    })
    .catch((err) =>
      res.send({
        message:
          err ||
          "There was an error, try again, if problem keeps happening, please contact support",
      })
    );
};
