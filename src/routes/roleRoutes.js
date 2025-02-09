const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

router
  .get("/", roleController.getAll)
  .get("/:_id", roleController.getId)
  .post("/", roleController.create)
  .put("/:_id", roleController.update)
  .delete("/:_id", roleController.deleteId);

module.exports = router;
