const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .get("/", userController.getAll)
  .get("/driver/:_id", userController.getAllDriver)
  .get("/:_id", userController.getId)
  .post("/", userController.create)
  .put("/:_id", userController.update)
  .delete("/:_id", userController.deleteId);

module.exports = router;
