const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router
  .get("/", companyController.getAll)
  .get("/:_id", companyController.getId)
  .post("/", companyController.create)
  .put("/:_id", companyController.update)
  .delete("/:_id", companyController.deleteId);

module.exports = router;
