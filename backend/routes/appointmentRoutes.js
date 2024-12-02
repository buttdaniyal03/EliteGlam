const express = require("express");
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require("../../controllers/appointmentController");

const router = express.Router();

// Create a new appointment
router.post("/", createAppointment);

// Get all appointments
router.get("/", getAppointments);

// Get appointment by ID
router.get("/:id", getAppointmentById);

// Update an appointment
router.put("/:id", updateAppointment);

// Delete an appointment
router.delete("/:id", deleteAppointment);

module.exports = router;
