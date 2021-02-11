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
    Publish_Date: req.body.date,
    Category_ID: req.body.category,
    Work_Keywords: req.body.keywords,
    Job_URL: req.body.joburl,
    WorkType: req.body.worktype,
    Location: req.body.location,
    Position: req.body.position,
    Email: req.body.email,
    Apply_Method: req.body.applymethod,
    Description: req.body.description,
    Posted_By: req.body.User_ID,
    //Me quede aca poniendo que el formulario mande el ID de usuario a la base de datos para poder editar el trabajo segun que usuario para traer una vista con los trabajos posteado por ese usuario o empresa para que rafo genere la vista
    createdAt: "2021-02-09T21:38:39.000Z",
    updatedAt: "2021-02-09T21:38:39.000Z",
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
  const id = req.body.Work_ID;

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
