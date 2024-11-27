const Clinic = require("../../models/Clinic");
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../../utils/tokenService");

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
    const existingClinic = await Clinic.findOne({ email });
    if (existingClinic) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

    res.status(201).json({
      message: "Clinic registered successfully",
      clinic: { id: clinic._id, name: clinic.name, email: clinic.email },
    });
  } catch (err) {
    console.error("Error registering clinic:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

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
