const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");

router
  .get("/", statusController.getAll)
  .get("/:_id", statusController.getId)
  .post("/", statusController.create)
  .put("/:_id", statusController.update)
  .delete("/:_id", statusController.deleteId);

module.exports = router;
