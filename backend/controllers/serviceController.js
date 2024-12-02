const Service = require("../models/Service");

// Add a new service
const addService = async (req, res) => {
  const { name, category, priceRange, description } = req.body;

  if (!name || !category || !priceRange) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    const existingService = await Service.findOne({ name });
    if (existingService) {
      return res.status(400).json({ message: "Service already exists" });
    }

    const service = new Service({
      name,
      category,
      priceRange,
      description,
    });

    await service.save();

    res.status(201).json({ message: "Service added successfully", service });
  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Failed to fetch services" });
  }
};

// Get a service by ID
const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a service
const updateService = async (req, res) => {
  const { id } = req.params;
  const { name, category, priceRange, description } = req.body;

  try {
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    if (name) service.name = name;
    if (category) service.category = category;
    if (priceRange) service.priceRange = priceRange;
    if (description) service.description = description;

    await service.save();

    res.status(200).json({ message: "Service updated successfully", service });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a service
const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get services by category
const getServicesByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const services = await Service.find({ category });

    if (services.length === 0) {
      return res
        .status(404)
        .json({ message: "No services found in this category" });
    }

    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services by category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  getServicesByCategory,
};
