import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import firebase auth

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Define error state
  const [loading, setLoading] = useState(false); // Define loading state
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log("User logged in:", user);
        localStorage.setItem("user", JSON.stringify(user)); // Store user info
        navigate("/dashboard");
      } else {
        setError("Please verify your email before logging in.");
        await auth.signOut(); // Sign out unverified user
      }
    } catch (error) {
      setError(error.message); // Show error message
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setError("Error during Google login: " + error.message);
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 bg-gradient-to-br from-gray-200 to-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-red-500">
        Login
      </h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-500 text-red-600 p-3 rounded mb-6 text-center shadow-md">
          {error}
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>
        {/* <div className="text-center mt-4">
          <span>Forget password? </span>
          <a href="#" className="text-red-500 hover:underline">
            Recover now
          </a>
        </div> */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <h2 className="text-center pt-3">OR</h2>

      {/* Google Login Button */}
      <div className="mt-3 text-center">
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          {loading ? "Signing in with Google..." : "Login with Google"}
        </button>
      </div>

      {/* Link to Registration */}
      <div className="text-center mt-4">
        <span>Don't have an account? </span>
        <a href="/registration" className="text-red-500 hover:underline">
          Sign up here
        </a>
      </div>
    </div>
  );
};

export default Login;
