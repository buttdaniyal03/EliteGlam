const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  firebaseAdminCredentials: process.env.FIREBASE_ADMIN_CREDENTIALS,
  jwtSecret: process.env.JWT_SECRET,
};
