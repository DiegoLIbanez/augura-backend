const express = require("express");
const router = express.Router();
const typeCommunalController = require("../controllers/typeCommunalController");

router
  .get("/", typeCommunalController.getAll)
  .get("/:_id", typeCommunalController.getId)
  .post("/", typeCommunalController.create)
  .put("/:_id", typeCommunalController.update)
  .delete("/:_id", typeCommunalController.deleteId);

module.exports = router;
