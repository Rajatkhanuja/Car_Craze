import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Update path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#181818] text-white">
      {/* Nav container */}
      <nav className="flex justify-between items-center py-2 sm:py-3 px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="CarCraze Logo"
              className="h-10 sm:h-12"
            />
          </Link>
        </div>

        {/* Hamburger icon - mobile only */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white bg-transparent border-none">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-lg sm:text-xl">
          <Link to="/" className="hover:text-gray-400" onClick={closeMenu}>HOME</Link>
          <Link to="/buy-used-car" className="hover:text-gray-400" onClick={closeMenu}>BUY USED CAR</Link>
          <Link to="/sell-car" className="hover:text-gray-400" onClick={closeMenu}>SELL CAR</Link>
          <Link to="/services" className="hover:text-gray-400" onClick={closeMenu}>SERVICES</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={closeMenu}>CONTACT US</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-[#181818] px-4 py-4 gap-4 text-lg font-medium">
          <Link to="/" onClick={closeMenu}>HOME</Link>
          <Link to="/buy-used-car" onClick={closeMenu}>BUY USED CAR</Link>
          <Link to="/sell-car" onClick={closeMenu}>SELL CAR</Link>
          <Link to="/services" onClick={closeMenu}>SERVICES</Link>
          <Link to="/contact" onClick={closeMenu}>CONTACT US</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
