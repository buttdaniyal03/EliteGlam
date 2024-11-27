const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  services: [String], // Services offered by the clinic
  licenseNumber: { type: String, required: true }, // Clinic-specific field
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

clinicSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Clinic", clinicSchema);
