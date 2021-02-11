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
exports.findAll = (req, res) => {};
exports.findAllJobs = (req, res) => {};
exports.findOne = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
