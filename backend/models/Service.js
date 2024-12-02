const mongoose = require("mongoose");

// Define the service schema
const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: {
      type: String,
      required: true,
      enum: ["Hair", "Skin", "Makeup", "Nails", "Massage", "Facial"], // You can expand this list as needed
    },
    priceRange: {
      type: {
        min: { type: Number, required: true }, // Minimum price
        max: { type: Number, required: true }, // Maximum price
      },
      required: true,
    },
    description: { type: String }, // Optional description of the service
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create and export the Service model
module.exports = mongoose.model("Service", serviceSchema);
