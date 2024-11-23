import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";

const RegistrationPage = () => {
  const [userType, setUserType] = useState("customer");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [preferredService, setPreferredService] = useState("");
  const [businessName, setBusinessName] = useState("");

  const [businessType, setBusinessType] = useState("Salon");
  const [businessAddress, setBusinessAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");

  // Individual error states
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    preferredService: "",
    businessName: "",
    businessAddress: "",
    licenseNumber: "",
    contactPerson: "",
    gender: "",
  });

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser && auth.currentUser.emailVerified) {
      setIsEmailVerified(true);
    }
  }, [auth.currentUser]);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    const newErrors = {};

    if (!firstName || !isNaN(firstName) || typeof firstName !== "string") {
      newErrors.firstName = "First name must be a valid string (not a number).";
    }

    // Validate Last Name
    if (!lastName || !isNaN(lastName) || typeof lastName !== "string") {
      newErrors.lastName = "Last name must be a valid string (not a number).";
    }

    if (!gender) newErrors.gender = "Gender is required.";
    if (isNaN(age) || age <= 0 || !Number.isInteger(Number(age)))
      newErrors.age = "Age must be a valid positive number.";
    if (!validateEmail(email))
      newErrors.email = "Please provide a valid email address.";
    if (!phone || !/^\d{11}$/.test(phone))
      newErrors.phone = "Phone number must be exactly 11 digits.";
    if (!location) newErrors.location = "Location is required.";
    if (!validatePassword(password))
      newErrors.password =
        "Password must have at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (
      userType === "business" &&
      (!contactPerson || typeof contactPerson !== "string")
    )
      newErrors.contactPerson = "Contact person must be a valid string.";
    if (
      userType === "business" &&
      (!businessName || typeof businessName !== "string")
    )
      newErrors.businessName = "Business name must be a valid string.";
    if (
      userType === "business" &&
      (!licenseNumber || typeof licenseNumber !== "string")
    )
      newErrors.licenseNumber = "License number must be a valid string.";
    if (
      userType === "business" &&
      (!businessAddress || typeof businessAddress !== "string")
    )
      newErrors.businessAddress = "Business address must be a valid string.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (!handleValidation()) {
      setIsLoading(false);
      return;
    }

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age: parseInt(age),
      email,
      phone: phone.trim(),
      location: location.trim(),
      gender,
      password,
      ...(userType === "customer" && { preferredService }),
      ...(userType === "business" && {
        businessName: businessName.trim(),
        businessType,
        businessAddress: businessAddress.trim(),
        licenseNumber: licenseNumber.trim(),
        contactPerson: contactPerson.trim(),
      }),
    };

    try {
      // Create the user with Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      console.log("Verification email sent to:", email);

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), payload);
      console.log("User data saved to Firestore");

      // Notify the user and redirect to login
      alert(
        "Registration successful! Please verify your email before logging in."
      );
      navigate("/login"); // Redirect to the login page

      // Log registration data to the external API
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed.");
      }

      console.log("Registration API response:", result);
    } catch (error) {
      console.error("Registration error:", error.message);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.split(" ")[1] || "",
        email: user.email,
        uid: user.uid,
      };

      await setDoc(doc(db, "users", user.uid), userData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
      setErrors((prev) => ({ ...prev, general: error.message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-200 to-gray-100 shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-red-500">
        Register
      </h2>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-500 text-red-600 p-3 rounded mb-6 text-center shadow-md">
          {errorMessage}
        </div>
      )}

      {/* User Type Selection */}
      <div className="mb-6 text-center">
        <label className="mr-6 text-lg font-semibold text-gray-700">
          <input
            type="radio"
            name="userType"
            value="customer"
            checked={userType === "customer"}
            onChange={(e) => setUserType(e.target.value)}
            className="mr-2 accent-red-500"
          />
          Customer
        </label>

        <label className="text-lg font-semibold text-gray-700">
          <input
            type="radio"
            name="userType"
            value="business"
            checked={userType === "business"}
            onChange={(e) => setUserType(e.target.value)}
            className="mr-2 accent-red-500"
          />
          Business (Salon/Clinic)
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Common Fields */}
        <div>
          <label className="block text-gray-700 font-medium">First Name</label>
          <input
            type="text"
            required
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Last Name</label>
          <input
            type="text"
            required
            placeholder="Enter your last name"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Gender</label>
          <select
            required
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Age</label>
          <input
            type="number"
            required
            min="18"
            max="100"
            placeholder="Enter your age"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <label className="block text-gray-700 font-medium">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            required
            placeholder="Confirm your password"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <input
            type="text"
            required
            placeholder="Enter your city or area"
            className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Conditional Fields */}
        {userType === "customer" && (
          <div>
            <label className="block text-gray-700 font-medium">
              Preferred Service
            </label>
            <input
              type="text"
              placeholder="Enter preferred service"
              className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
              value={preferredService}
              onChange={(e) => setPreferredService(e.target.value)}
            />
            {errors.preferredService && (
              <p className="text-red-500 text-sm mt-1">
                {errors.preferredService}
              </p>
            )}
          </div>
        )}
        {userType === "business" && (
          <>
            <div>
              <label className="block text-gray-700 font-medium">
                Contact Person
              </label>
              <input
                type="text"
                required
                placeholder="Enter the contact person's name"
                className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
              {errors.contactPerson && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactPerson}
                </p>
              )}
            </div>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
              className="form-select"
            >
              <option value="Salon">Salon</option>
              <option value="Clinic">Clinic</option>
            </select>

            <div>
              <label className="block text-gray-700 font-medium">
                Business Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your business name"
                className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
              {errors.businessName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.businessName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Business Address
              </label>
              <input
                type="text"
                required
                placeholder="Enter your business address"
                className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
              />
              {errors.businessAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.businessAddress}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                License Number
              </label>
              <input
                type="text"
                required
                placeholder="Enter your license number"
                className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
              {errors.licenseNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.licenseNumber}
                </p>
              )}
            </div>
          </>
        )}

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full mt-4 py-3 text-white bg-red-500 font-semibold rounded-lg transition duration-300 hover:bg-red-600"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Register"}
          </button>
        </div>
      </form>

      <div className="text-center mt-6">
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 py-3 text-white bg-red-500 font-semibold rounded-lg transition duration-300 hover:bg-red-600"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};
export default RegistrationPage;
