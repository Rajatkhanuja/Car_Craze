import React, { useState } from "react";
import logo from "../assets/logo.jpg"; // Adjust the path if needed
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
          <Link to="/" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            HOME
          </Link>
          <Link to="/stock" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            BUY USED CAR
          </Link>
          <Link to="/sell" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SELL CAR
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SERVICES
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
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
        <div className="lg:hidden bg-[#1A1A1A] text-white font-medium text-xl p-4 pl-8 pr-8 mt-2">
          <Link to="/" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            HOME
          </Link>
          <Link to="/stock" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            BUY USED CAR
          </Link>
          <Link to="/sell" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SELL CAR
          </Link>
          <Link to="/services" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SERVICES
          </Link>
          <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
