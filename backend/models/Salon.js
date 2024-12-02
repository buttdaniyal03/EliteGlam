const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Make sure bcrypt is imported

// Define the salon schema
const salonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    services: [String], // Services offered by the salon
    priceRange: { type: String }, // Optional field
    isVerified: { type: Boolean, default: false },
    role: { type: String, default: "salon" }, // Add role field
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

// Hash the password before saving
salonSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Don't hash if the password is not modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next();
  } catch (error) {
    next(error);
  }
});

// Compare the given password with the stored hashed password
salonSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error("Error comparing password");
  }
};

// Create and export the Salon model
module.exports = mongoose.model("Salon", salonSchema);
