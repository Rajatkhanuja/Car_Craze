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
          <Link to="/about" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            ABOUT US
          </Link>
          <Link to="/stock" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            BUY USED CAR
          </Link>
          <Link to="/sell" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SELL CAR
          </Link>

          {/* VALUE ADDED SERVICES Dropdown - Desktop */}
          <div className="relative group">
            <button className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white bg-transparent border-none focus:outline-none appearance-none">
              VALUE ADDED SERVICES
            </button>
            <div className="absolute hidden group-hover:block bg-[#1A1A1A] text-white mt-2 py-2 w-64 shadow-lg rounded z-50">
              <Link to="/insurance" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Insurance</Link>
              <Link to="/road-side-assistance" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Road Side Assistance</Link>
              <Link to="/warranty" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Warranty</Link>
              <Link to="/pre-delivery-inspection" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Pre Delivery Inspection</Link>
              <Link to="/denting-painting" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Denting & Painting Work</Link>
              <Link to="/dryclean-polish" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Dryclean & Polish Work</Link>
              <Link to="/rto-work" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">RTO Work</Link>
            </div>
          </div>

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
          <Link to="/about" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            ABOUT US
          </Link>
          <Link to="/stock" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            BUY USED CAR
          </Link>
          <Link to="/sell" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SELL CAR
          </Link>

          {/* VALUE ADDED SERVICES - Mobile Nested Links */}
          <div className="py-2">
            <p className="text-white">VALUE ADDED SERVICES</p>
            <div className="pl-4 text-base">
              <Link to="/insurance" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Insurance</Link>
              <Link to="/road-side-assistance" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Road Side Assistance</Link>
              <Link to="/warranty" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Warranty</Link>
              <Link to="/pre-delivery-inspection" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Pre Delivery Inspection</Link>
              <Link to="/denting-painting" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Denting & Painting Work</Link>
              <Link to="/dryclean-polish" onClick={closeMenu} className="block py-1 hover:text-yellow-400">Dryclean & Polish Work</Link>
              <Link to="/rto-work" onClick={closeMenu} className="block py-1 hover:text-yellow-400">RTO Work</Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
