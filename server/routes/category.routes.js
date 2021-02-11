module.exports = (app) => {
  const Category = require("../controllers/category.controller");
  var router = require("express").Router();

  router.post("/", Category.create);
  router.get("/List", Category.findAll);
  router.get("/:id/WorkList", Category.findJobsById);
  router.put("/:id/update", Category.update);
  router.delete("/:id/delete", Category.delete);

  app.use("/api/categories", router);
};
