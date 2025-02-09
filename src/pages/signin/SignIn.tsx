import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "confirmPassword" || name === "newPassword") {
      if (name === "confirmPassword" && value !== formData.newPassword) {
        setError("Passwords do not match!");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    console.log("Form Data:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-xl p-6 rounded-2xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Manage My Account</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="text-red-500 font-semibold cursor-pointer">My Profile</li>
          <li className="hover:text-red-500 transition cursor-pointer">Address Book</li>
          <li className="hover:text-red-500 transition cursor-pointer">My Payment Options</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4 text-gray-800">My Orders</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-red-500 transition cursor-pointer">My Returns</li>
          <li className="hover:text-red-500 transition cursor-pointer">My Cancellations</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4 text-gray-800">My Wishlist</h2>
      </aside>

      {/* Profile Form */}
      <section className="w-full lg:w-3/4 shadow-xl p-8 sm:p-12 rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-red-500 mb-6 text-center lg:text-left">Edit Your Profile</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {["firstName", "lastName"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field === "firstName" ? "First Name" : "Last Name"}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-400"
                required
              />
            ))}
          </div>

          {["email", "address"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-400"
              required
            />
          ))}

          <h3 className="text-lg font-semibold mt-6 text-gray-800">Password Changes</h3>

          {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
            <div className="relative" key={field}>
              <input
                type={showPassword[field as keyof typeof showPassword] ? "text" : "password"}
                name={field}
                placeholder={
                  field === "currentPassword"
                    ? "Current Password"
                    : field === "newPassword"
                    ? "New Password"
                    : "Confirm New Password"
                }
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="border px-4 py-3 rounded-lg w-full pr-10 focus:ring-2 focus:ring-red-400"
                required={field !== "currentPassword"}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, [field]: !prev[field as keyof typeof showPassword] }))
                }
              >
                {showPassword[field as keyof typeof showPassword] ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end mt-6 gap-4">
            <button type="button" className="text-gray-500 hover:text-gray-700 transition">
              Cancel
            </button>
            <button
              type="submit"
              className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition ${
                Object.values(formData).every((value) => value.trim()) && !error
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!Object.values(formData).every((value) => value.trim()) || !!error}
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
