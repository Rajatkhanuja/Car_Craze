import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Car Craze Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-400 transition" onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/stock" className="hover:text-yellow-400 transition" onClick={closeMenu}>
            BUY USED CAR
          </Link>
          <Link to="/sell" className="hover:text-yellow-400 transition" onClick={closeMenu}>
            SELL CAR
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition" onClick={closeMenu}>
            SERVICES
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition" onClick={closeMenu}>
            CONTACT US
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white text-lg font-medium px-4 pb-4 space-y-2">
          <Link to="/" onClick={closeMenu} className="block hover:text-yellow-400 transition">
            HOME
          </Link>
          <Link to="/stock" onClick={closeMenu} className="block hover:text-yellow-400 transition">
            BUY USED CAR
          </Link>
          <Link to="/sell" onClick={closeMenu} className="block hover:text-yellow-400 transition">
            SELL CAR
          </Link>
          <Link to="/services" onClick={closeMenu} className="block hover:text-yellow-400 transition">
            SERVICES
          </Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-yellow-400 transition">
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
