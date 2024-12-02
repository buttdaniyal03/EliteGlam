// const mongoose = require("mongoose");

// const roleSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   permissions: { type: [String], default: [] }, // Example: ["CREATE", "READ", "UPDATE", "DELETE"]
// });

// module.exports = mongoose.model("Role", roleSchema);

const mongoose = require("mongoose");

// Define the schema for roles in the system
const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ["admin", "customer", "salon", "clinic", "business"], // Define the roles available in the system
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    permissions: {
      type: [String], // Array of permissions (e.g., ['create', 'read', 'update', 'delete'])
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create a model based on the role schema
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
