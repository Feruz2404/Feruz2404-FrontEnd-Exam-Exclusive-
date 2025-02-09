import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="w-full bg-black text-white text-center py-2 text-xs sm:text-sm">
        Summer Sale For All Swim Suits & Free Express Delivery - 
        <span className="font-bold"> 50% OFF! </span>
        <span className="font-semibold cursor-pointer underline ml-1">Shop Now</span>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between container mx-auto py-4 px-4 md:px-8">
        {/* Logo */}
        <h1 onClick={() => navigate("/")} className="text-3xl font-bold cursor-pointer">
          Exclusive
        </h1>

        {/* Hamburger menu (faqat mobil uchun) */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Menu (Desktop uchun) */}
        <ul className={`md:flex hidden gap-8 text-lg text-gray-700`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "hover:text-black"
              }
            >
              Home
            </NavLink>
          </li>
          {["Contact", "About", "SignUp"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-black"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons & Search */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search..."
              className="w-40 py-2 pr-10 pl-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="16.7" y1="16.7" x2="21" y2="21"></line>
            </svg>
          </div>

          <NavLink to="/wishlist">
            <FaRegHeart className="text-2xl hover:text-red-600 transition" />
          </NavLink>

          <NavLink to="/cart">
            <IoCartOutline className="text-3xl hover:text-red-600 transition" />
          </NavLink>

          <NavLink to="/signin">
            <FaRegUser className="text-2xl hover:text-red-600 transition" />
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu (Framer Motion bilan) */}
      {/* Mobile Menu (Framer Motion bilan) */}
<AnimatePresence>
  {menuOpen && (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="md:hidden flex flex-col gap-4 text-lg text-center py-4 bg-gray-100 shadow-lg absolute top-full left-0 w-full z-50"
    >
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "hover:text-black"
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      {["Contact", "About", "SignUp"].map((item) => (
        <li key={item}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </NavLink>
        </li>
      ))}

      {/* Mobil versiyada ikonlar */}
      <div className="flex justify-center gap-6 py-2">
        <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>
          <FaRegHeart className="text-2xl hover:text-red-500 transition" />
        </NavLink>

        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
          <IoCartOutline className="text-3xl hover:text-gray-600 transition" />
        </NavLink>

        <NavLink to="/signin" onClick={() => setMenuOpen(false)}>
          <FaRegUser className="text-2xl hover:text-gray-600 transition" />
        </NavLink>
      </div>
    </motion.ul>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;
