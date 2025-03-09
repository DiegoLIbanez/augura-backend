const express = require("express");
const router = express.Router();
const registerDesinfectionController = require("../controllers/registerDesinfectionController");

router
  .get("/", registerDesinfectionController.getAll)
  .get("/:_id", registerDesinfectionController.getId)
  .post("/", registerDesinfectionController.create)
  .put("/:_id", registerDesinfectionController.update)
  .delete("/:_id", registerDesinfectionController.deleteId);

module.exports = router;
