const db = require("../models");
const Role = db.role;
const User = db.users;

checkRegisteredMail = (req, res, next) => {
  User.findOne({
    where: {
      User_Email: req.body.useremail,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    }
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.userrole) {
    for (let i = 0; i < req.body.userrole.length; i++) {
      if (!Role.includes(req.body.userrole[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.userrole[i],
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkRegisteredMail: checkRegisteredMail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
