const express = require("express");
const {
  registerClinic,
  getClinics,
} = require("../../controllers/business/clinicController");

const router = express.Router();

// Register a new clinic
router.post("/register", registerClinic);

// Get all clinics
router.get("/", getClinics);

module.exports = router;
