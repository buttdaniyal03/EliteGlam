// const mongoose = require("mongoose");

// const clinicSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   phoneNumber: { type: String, required: true },
//   services: [String], // Services offered by the clinic
//   licenseNumber: { type: String, required: true }, // Clinic-specific field
//   isVerified: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
// });

// clinicSchema.methods.comparePassword = function (password) {
//   return bcrypt.compare(password, this.password);
// };

module.exports = mongoose.model("Clinic", clinicSchema);
const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming the owner is a user (could be salon/clinic owner)
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10,15}$/, // Phone number validation
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    servicesOffered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service", // Assuming you have a "Service" model for specific services offered by clinics
      },
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    availableSlots: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          required: true,
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    ],
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Clinic = mongoose.model("Clinic", clinicSchema);

module.exports = Clinic;
