module.exports = (app) => {
  const User = require("../controllers/user.controller");
  var router = require("express").Router();

  router.post("/", User.create);
  router.put("/:id/update", User.update);
  router.delete("/:id/delete", User.delete);
  router.post("/", User.login);

  app.use("/api/users", router);
};
