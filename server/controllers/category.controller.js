const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.categoryname) {
    res.status(400).send({
      message: "Category name cant be empty",
    });
    return;
  }
  const category = {
    Category_Name: req.body.categoryname,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err || "There was an error adding this category",
      });
    });
};

exports.findAll = (req, res) => {
  Category.findAll()
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
exports.findJobsById = (req, res) => {
  const id = req.body.Work_ID;
};
exports.findOne = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
