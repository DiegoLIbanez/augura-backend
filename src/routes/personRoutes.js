const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router
  .get("/", personController.getAll)
  .get("/:_id", personController.getId)
  .post("/", personController.create)
  .put("/:_id", personController.update)
  .delete("/:_id", personController.deleteId);

module.exports = router;
