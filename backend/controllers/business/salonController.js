const Salon = require("../../models/Salon");
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../../utils/tokenService");

const registerSalon = async (req, res) => {
  const { name, email, password, address, city, phoneNumber, services } =
    req.body;

  try {
    const existingSalon = await Salon.findOne({ email });
    if (existingSalon) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const salon = new Salon({
      name,
      email,
      password: hashedPassword,
      address,
      city,
      phoneNumber,
      services,
    });

    await salon.save();

    res.status(201).json({
      message: "Salon registered successfully",
      salon: { id: salon._id, name: salon.name, email: salon.email },
    });
  } catch (err) {
    console.error("Error registering salon:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSalons = async (req, res) => {
  try {
    const salons = await Salon.find().select("-password");
    res.status(200).json(salons);
  } catch (err) {
    console.error("Error fetching salons:", err);
    res.status(500).json({ message: "Failed to fetch salons" });
  }
};

module.exports = { registerSalon, getSalons };
