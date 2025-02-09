const express = require("express");
const router = express.Router();
const typeBurdenController = require("../controllers/typeBurdenController");

router
  .get("/", typeBurdenController.getAll)
  .get("/:_id", typeBurdenController.getId)
  .post("/", typeBurdenController.create)
  .put("/:_id", typeBurdenController.update)
  .delete("/:_id", typeBurdenController.deleteId);

module.exports = router;
