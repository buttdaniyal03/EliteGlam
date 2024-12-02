const express = require("express");
const router = express.Router();

const {
  addService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  getServicesByCategory,
} = require("../../controllers/serviceController");

// Add a new service
router.post("/", addService);

// Get all services
router.get("/", getServices);

// Get a service by ID
router.get("/:id", getServiceById);

// Update a service
router.put("/:id", updateService);

// Delete a service
router.delete("/:id", deleteService);

// Get services by category
router.get("/category/:category", getServicesByCategory);

module.exports = router;
