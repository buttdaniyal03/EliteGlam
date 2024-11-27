const express = require("express");
const {
  registerClinic,
  getClinics,
} = require("../../controllers/business/clinicController");
const router = express.Router();

router.post("/register", registerClinic);
router.get("/", getClinics);

module.exports = router;
