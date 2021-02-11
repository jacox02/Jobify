const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
    User_Name: req.body.username,
    User_Email: req.body.email,
    User_Password: bcrypt.hashSync(req.body.password, 8),
    User_Role: "user",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  })
    .then(() => {
      res.status(200).send({
        message: "User registered succesfully",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err || "Error creating new user",
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      User_Email: req.body.useremail,
    },
  }).then((user) => {
    if (!user) {
      return res.status(400).send({
        message: "No user found, please register first!",
      });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.User_Password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToke: null,
        message: "Invalid password",
      });
    }

    var token = jwt.sign({ id: user.User_ID }, config.secret, {
      expiresIn: 86400, //24 Horas
    });
  });
  var authorities = [];
  User.getRoles()
    .then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user.User_ID,
        username: user.User_Name,
        email: user.User_Email,
        roles: authorities,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(200).send({
        message: err.message,
      });
    });
};
