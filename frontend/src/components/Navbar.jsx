import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDesktopDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDesktopDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleDesktopDropdown = () => {
    setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <header className="bg-[#1A1A1A] fixed top-0 left-0 w-full z-50 shadow-md border-b border-gray-800">
      <nav className="flex justify-between items-center py-3 px-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="CarCraze Logo" className="h-10 sm:h-11" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-[17px] text-white">
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
          <div className="relative">
            <button
              onClick={toggleDesktopDropdown}
              className="hover:text-yellow-400 transition duration-200 ease-linear text-white bg-transparent border-none focus:outline-none"
            >
              VALUE ADDED SERVICES
            </button>
            <div className={`absolute ${isDesktopDropdownOpen ? "block" : "hidden"} bg-[#1A1A1A] text-white mt-2 py-2 w-64 shadow-lg rounded z-50`}>
              <Link to="/insurance" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">Insurance</Link>
              <Link to="/rodeside" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">Road Side Assistance</Link>
              <Link to="/warranty" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">Warranty</Link>
              <Link to="/predelivery" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">Pre Delivery Inspection</Link>
              <Link to="/DentingPainting" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">Denting & Painting Work</Link>
              <Link to="/DrycleanPolish" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">Dryclean & Polish Work</Link>
              <Link to="/RTOWork" onClick={closeMenu} className="block px-4 py-2 hover:bg-yellow-400 text-white no-underline">RTO Work</Link>
            </div>
          </div>

          <Link to="/loyalty" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            LOYALTY PROGRAM
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden absolute top-4 right-4 flex items-center" onClick={toggleMenu}>
          <button className="text-white bg-transparent border-none">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] text-white font-medium text-lg p-4 pl-8 pr-8 mt-1">
          <Link to="/about" onClick={closeMenu} className="block py-2 hover:text-yellow-400 text-white no-underline">ABOUT US</Link>
          <Link to="/stock" onClick={closeMenu} className="block py-2 hover:text-yellow-400 text-white no-underline">BUY USED CAR</Link>
          <Link to="/sell" onClick={closeMenu} className="block py-2 hover:text-yellow-400 text-white no-underline">SELL CAR</Link>

          {/* VALUE ADDED SERVICES - Mobile Dropdown */}
          <div>
            <p className="block py-2 text-white flex justify-between items-center" onClick={toggleMobileDropdown}>
              VALUE ADDED SERVICES
              <i className={`fas ${isMobileDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"} text-sm`}></i>
            </p>
            {isMobileDropdownOpen && (
              <div className="pl-6 py-0 text-base -mt-3">
                <Link to="/insurance" onClick={closeMenu} className="block py-1 hover:text-yellow-400 text-white no-underline">Insurance</Link>
                <Link to="/rodeside" onClick={closeMenu} className="block py-1 hover:text-yellow-400 text-white no-underline">Road Side Assistance</Link>
                <Link to="/warranty" onClick={closeMenu} className="block py-1 hover:text-yellow-400 text-white no-underline">Warranty</Link>
                <Link to="/predelivery" onClick={closeMenu} className="block py-1 hover:text-yellow-400 text-white no-underline">Pre Delivery Inspection</Link>
                <Link to="/DentingPainting" onClick={closeMenu} className="block py-1 hover:text-yellow-400 text-white no-underline">Denting & Painting Work</Link>
                <Link to="/DrycleanPolish" onClick={closeMenu} className="block py-1 hover:text-yellow-400 text-white no-underline">Dryclean & Polish Work</Link>
                <Link to="/RTOWork" onClick={closeMenu} className="block py-1 mb-3 hover:text-yellow-400 text-white no-underline">RTO Work</Link>
              </div>
            )}
          </div>

          <Link to="/loyalty" onClick={closeMenu} className="block py-2 -mt-4 hover:text-yellow-400 text-white no-underline">LOYALTY PROGRAM</Link>
          <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-yellow-400 text-white no-underline">CONTACT US</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
