module.exports = function (app) {
  const { verifySignUp } = require("../middleware");
  const controller = require("../controllers/auth.controller");
  var router = require("express").Router();
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/signup",
    [verifySignUp.checkAlreadyRegisteredData],
    controller.signup
  );

  app.post("/signin", (req, res) => {
    res.send({
      path: "Hi",
    });
  });
  app.use("/api/auth", router);
};
