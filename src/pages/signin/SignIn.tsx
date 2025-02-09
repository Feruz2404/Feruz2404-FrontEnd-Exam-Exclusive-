import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  // Foydalanuvchi ma'lumotlarini localStorage'dan yuklash
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    if (loggedInUser) {
      setFormData({
        firstName: loggedInUser.firstName || "",
        lastName: loggedInUser.lastName || "",
        email: loggedInUser.email || "",
        address: loggedInUser.address || "",
        currentPassword: "", // Parol ko'rsatilmaydi
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Yangi ma'lumotlarni localStorage'ga saqlash
    const updatedUser = {
      ...formData,
    };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">My Account</span>
      </nav>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white shadow p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="text-red-500 font-medium cursor-pointer">My Profile</li>
            <li className="hover:text-red-500 cursor-pointer">Address Book</li>
            <li className="hover:text-red-500 cursor-pointer">My Payment Options</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-red-500 cursor-pointer">My Returns</li>
            <li className="hover:text-red-500 cursor-pointer">My Cancellations</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">My WishList</h2>
        </aside>

        {/* Profile Form */}
        <section className="w-full lg:w-3/4 bg-white shadow p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["firstName", "lastName"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field === "firstName" ? "First Name" : "Last Name"}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-400"
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
                className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-400"
              />
            ))}

            <h3 className="text-lg font-semibold mt-6">Password Changes</h3>

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
                  className="border border-gray-300 px-4 py-3 rounded-lg w-full pr-10 focus:ring-2 focus:ring-red-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() =>
                    setShowPassword((prev) => ({ ...prev, [field]: !prev[field as keyof typeof showPassword] }))
                  }
                >
                  {showPassword[field as keyof typeof showPassword] ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            ))}

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button type="button" className="text-gray-500 hover:text-gray-700 transition">
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
