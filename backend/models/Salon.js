const mongoose = require("mongoose");

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  services: [String], // Services offered by the salon
  priceRange: String, // Optional
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

salonSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Salon", salonSchema);
