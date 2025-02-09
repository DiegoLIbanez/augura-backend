const express = require("express");
const router = express.Router();
const consumptionController = require("../controllers/consumptionController");

router
  .get("/", consumptionController.getAll)
  .get("/:_id", consumptionController.getId)
  .post("/", consumptionController.create)
  .put("/:_id", consumptionController.update)
  .delete("/:_id", consumptionController.deleteId);

module.exports = router;
