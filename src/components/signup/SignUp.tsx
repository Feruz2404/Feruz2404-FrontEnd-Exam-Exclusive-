import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import signup from "../../assets/images/singup.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Save user data to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.find(
      (user: any) => user.email === formData.email
    );

    if (userExists) {
      setError("User with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    alert("Sign-up successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Image Section */}
          <div className="hidden md:flex items-center justify-center bg-gray-100">
            <img
              src={signup}
              alt="Sign Up Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Create an account
            </h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition duration-300"
              >
                Create Account
              </button>

              {/* Sign up with Google */}
              <button
                type="button"
                className="w-full py-3 flex items-center justify-center border rounded-lg mt-4 hover:bg-gray-100 transition duration-300"
              >
                <FcGoogle className="mr-3" /> Sign up with Google
              </button>
            </form>

            {/* Already have an account? */}
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-red-500 hover:underline font-medium"
              >
                Log in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
