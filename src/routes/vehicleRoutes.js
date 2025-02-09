const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router
  .get("/", vehicleController.getAll)
  .get("/:_id", vehicleController.getId)
  .post("/", vehicleController.create)
  .put("/:_id", vehicleController.update)
  .delete("/:_id", vehicleController.deleteId);

module.exports = router;
