const Clinic = require("../../models/Clinic");
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../../utils/tokenService");

// Register a Clinic
const registerClinic = async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    city,
    phoneNumber,
    licenseNumber,
    services,
  } = req.body;

  try {
    // Check for existing clinic
    const existingClinic = await Clinic.findOne({ email });
    if (existingClinic) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save clinic
    const clinic = new Clinic({
      name,
      email,
      password: hashedPassword,
      address,
      city,
      phoneNumber,
      licenseNumber,
      services,
    });

    await clinic.save();

    // Generate token
    const token = generateAuthToken(clinic);

    res.status(201).json({
      message: "Clinic registered successfully",
      clinic: { id: clinic._id, name: clinic.name, email: clinic.email },
      token,
    });
  } catch (err) {
    console.error("Error registering clinic:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch all Clinics
const getClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find().select("-password");
    res.status(200).json(clinics);
  } catch (err) {
    console.error("Error fetching clinics:", err);
    res.status(500).json({ message: "Failed to fetch clinics" });
  }
};

module.exports = { registerClinic, getClinics };
