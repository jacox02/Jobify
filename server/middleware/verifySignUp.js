const db = require("../models");
const Roles = db.role;
const User = db.users;

checkAlreadyRegisteredData = (req, res, next) => {
  User.findOne({
    where: {
      User_Email: req.body.useremail,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: `The next mail ${req.body.useremail} is already registered`,
      });
      return;
    }
  });
  next();
};
const verifySignUp = {
  checkAlreadyRegisteredData: checkAlreadyRegisteredData,
};

module.exports = verifySignUp;
