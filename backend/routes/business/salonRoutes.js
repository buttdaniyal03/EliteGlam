const express = require("express");
const {
  registerSalon,
  getSalons,
} = require("../../controllers/business/salonController");
const router = express.Router();

router.post("/register", registerSalon);
router.get("/", getSalons);

module.exports = router;
