const express = require("express");
const {
  registerSalon,
  getSalons,
} = require("../../controllers/business/salonController");

const router = express.Router();

// Register a new salon
router.post("/register", registerSalon);

// Get all salons
router.get("/", getSalons);

module.exports = router;
