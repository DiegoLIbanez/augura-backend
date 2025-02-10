const express = require("express");
const router = express.Router();
const typeInputController = require("../controllers/typeInputController");

router
  .get("/", typeInputController.getAll)
  .get("/:_id", typeInputController.getId)
  .post("/", typeInputController.create)
  .put("/:_id", typeInputController.update)
  .delete("/:_id", typeInputController.deleteId);

module.exports = router;
