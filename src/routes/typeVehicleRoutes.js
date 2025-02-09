const express = require("express");
const router = express.Router();
const typeVehicleController = require("../controllers/typeVehicleController");

router
  .get("/", typeVehicleController.getAll)
  .get("/:_id", typeVehicleController.getId)
  .post("/", typeVehicleController.create)
  .put("/:_id", typeVehicleController.update)
  .delete("/:_id", typeVehicleController.deleteId);

module.exports = router;
