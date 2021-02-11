module.exports = (app) => {
  const Company = require("../controllers/companies.controller");
  var router = require("express").Router();

  router.post("/", Company.create);
  router.put("/:id/update", Company.update);
  router.delete("/:id/delete", Company.delete);

  app.use("/api/companies", router);
};
