import React, { useState } from "react";
import logo from "../assets/logo.jpg"; // adjust path if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-yellow-400 transition duration-200">
              Home
            </Link>

            <div className="relative group">
              <div className="hover:text-yellow-400 transition duration-200 cursor-pointer">
                VALUE ADDED SERVICES
              </div>

              <div className="absolute left-0 bg-[#1A1A1A] text-white mt-2 py-2 w-64 shadow-lg rounded z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link to="/insurance" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">Insurance</Link>
                <Link to="/road-side-assistance" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">Road Side Assistance</Link>
                <Link to="/warranty" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">Warranty</Link>
                <Link to="/pre-delivery-inspection" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">Pre Delivery Inspection</Link>
                <Link to="/denting-painting" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">Denting & Painting Work</Link>
                <Link to="/dryclean-polish" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">Dryclean & Polish Work</Link>
                <Link to="/rto-work" className="block px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black">RTO Work</Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-yellow-400 transition duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] text-white px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block font-bold text-white py-1 hover:text-yellow-400">Home</Link>
          <div className="block font-bold text-white py-1">VALUE ADDED SERVICES</div>
          <div className="ml-4 space-y-1">
            <Link to="/insurance" className="block font-bold text-white hover:text-yellow-400">Insurance</Link>
            <Link to="/road-side-assistance" className="block font-bold text-white hover:text-yellow-400">Road Side Assistance</Link>
            <Link to="/warranty" className="block font-bold text-white hover:text-yellow-400">Warranty</Link>
            <Link to="/pre-delivery-inspection" className="block font-bold text-white hover:text-yellow-400">Pre Delivery Inspection</Link>
            <Link to="/denting-painting" className="block font-bold text-white hover:text-yellow-400">Denting & Painting Work</Link>
            <Link to="/dryclean-polish" className="block font-bold text-white hover:text-yellow-400">Dryclean & Polish Work</Link>
            <Link to="/rto-work" className="block font-bold text-white hover:text-yellow-400">RTO Work</Link>
          </div>
          <Link to="/contact" className="block font-bold text-white py-1 hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
