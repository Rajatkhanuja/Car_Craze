import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Absolute Logo in Top-Left */}
      <div className="absolute top-0 left-0">
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="CarCraze Logo"
            className="h-[50px] w-auto object-contain"
          />
        </Link>
      </div>

      {/* Navbar Container */}
      <nav className="flex justify-end items-center py-4 px-4 lg:px-8 pl-[70px]">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-xl text-white">
          <Link to="/" className="hover:text-yellow-400 transition duration-200 ease-linear">
            HOME
          </Link>
          <Link to="/stock" className="hover:text-yellow-400 transition duration-200 ease-linear">
            BUY USED CAR
          </Link>
          <Link to="/sell" className="hover:text-yellow-400 transition duration-200 ease-linear">
            SELL CAR
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition duration-200 ease-linear">
            SERVICES
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-200 ease-linear">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden absolute top-6 right-4 flex items-center" onClick={toggleMenu}>
          <button className="text-white bg-transparent border-none">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white font-medium text-xl p-4 pl-8 pr-8 mt-2">
          <Link to="/" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition">
            HOME
          </Link>
          <Link to="/stock" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition">
            BUY USED CAR
          </Link>
          <Link to="/sell" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition">
            SELL CAR
          </Link>
          <Link to="/services" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition">
            SERVICES
          </Link>
          <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition">
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
