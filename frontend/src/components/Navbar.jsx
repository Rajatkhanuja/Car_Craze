import React, { useState } from "react";
import logo from "../assets/logo.jpg"; // Adjust the path if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For mobile dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-[#1A1A1A] fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Navbar Container */}
      <nav className="flex justify-between items-center py-4 px-0 sm:px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeMenu} className="ml-0 sm:ml-0">
            <img
              src={logo}
              alt="CarCraze Logo"
              className="h-10 sm:h-12 ml-0"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-xl text-white">
          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            ABOUT US
          </Link>
          <Link
            to="/stock"
            className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            BUY USED CAR
          </Link>
          <Link
            to="/sell"
            className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            SELL CAR
          </Link>

          {/* VALUE ADDED SERVICES - Desktop Dropdown */}
          <div className="relative group">
            <span className="hover:text-yellow-400 cursor-pointer text-white">
              VALUE ADDED SERVICES
            </span>
            <div className="absolute hidden group-hover:block bg-[#1A1A1A] text-white mt-2 rounded shadow-lg z-50 min-w-[250px]">
              <Link to="/services/insurance" className="block px-4 py-2 hover:bg-yellow-500">Insurance</Link>
              <Link to="/services/roadside" className="block px-4 py-2 hover:bg-yellow-500">Road Side Assistance</Link>
              <Link to="/services/warranty" className="block px-4 py-2 hover:bg-yellow-500">Warranty</Link>
              <Link to="/services/pre-delivery" className="block px-4 py-2 hover:bg-yellow-500">Pre Delivery Inspection</Link>
              <Link to="/services/painting" className="block px-4 py-2 hover:bg-yellow-500">Denting & Painting Work</Link>
              <Link to="/services/dryclean" className="block px-4 py-2 hover:bg-yellow-500">Dryclean & Polish Work</Link>
              <Link to="/services/rto" className="block px-4 py-2 hover:bg-yellow-500">RTO Work</Link>
            </div>
          </div>

          <Link
            to="/contact"
            className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="lg:hidden absolute top-6 right-4 flex items-center"
          onClick={toggleMenu}
        >
          <button className="text-white bg-transparent border-none">
            <i
              className={`fas ${
                isMenuOpen ? "fa-times" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] text-white font-medium text-xl p-4 pl-8 pr-8 mt-2">
          <Link
            to="/about"
            onClick={closeMenu}
            className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            ABOUT US
          </Link>
          <Link
            to="/stock"
            onClick={closeMenu}
            className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            BUY USED CAR
          </Link>
          <Link
            to="/sell"
            onClick={closeMenu}
            className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            SELL CAR
          </Link>

          {/* VALUE ADDED SERVICES - Mobile Dropdown */}
          <div>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white cursor-pointer flex justify-between items-center"
            >
              <span>VALUE ADDED SERVICES</span>
              <i
                className={`fas fa-chevron-${
                  dropdownOpen ? "up" : "down"
                }`}
              ></i>
            </div>

            {dropdownOpen && (
              <div className="pl-4 text-base">
                <Link to="/services/insurance" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Insurance</Link>
                <Link to="/services/roadside" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Road Side Assistance</Link>
                <Link to="/services/warranty" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Warranty</Link>
                <Link to="/services/pre-delivery" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Pre Delivery Inspection</Link>
                <Link to="/services/painting" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Denting & Painting Work</Link>
                <Link to="/services/dryclean" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Dryclean & Polish Work</Link>
                <Link to="/services/rto" onClick={closeMenu} className="block py-1 hover:text-yellow-400">RTO Work</Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
