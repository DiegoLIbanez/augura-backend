const express = require("express");
const router = express.Router();
const registerVehicleModelController = require("../controllers/registerVehicleModelController");

router
  .get("/", registerVehicleModelController.getAll)
  .get("/:_id", registerVehicleModelController.getId)
  .post("/", registerVehicleModelController.create)
  .put("/:_id", registerVehicleModelController.update)
  .delete("/:_id", registerVehicleModelController.deleteId);

module.exports = router;
