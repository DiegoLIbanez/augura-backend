const express = require("express");
const router = express.Router();
const statusDesinfectionController = require("../controllers/statusDesinfectionController");

router
  .get("/", statusDesinfectionController.getAll)
  .get("/:_id", statusDesinfectionController.getId)
  .post("/", statusDesinfectionController.create)
  .put("/:_id", statusDesinfectionController.update)
  .delete("/:_id", statusDesinfectionController.deleteId);

module.exports = router;
