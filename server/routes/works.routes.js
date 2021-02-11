module.exports = (app) => {
  const Work = require("../controllers/works.controller");
  var router = require("express").Router();

  router.post("/", Work.create);
  router.get("/List", Work.findAll);
  router.get("/:id/Details", Work.findOneByID);
  router.put("/:id/update", Work.update);
  router.delete("/:id/delete", Work.delete);

  app.use("/api/works", router);
};
