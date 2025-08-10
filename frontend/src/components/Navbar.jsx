import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Note: You would import your logo image here.
// For this example, we'll assume a placeholder.
// import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // New state to manage the desktop dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggles the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Closes both mobile and desktop menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Toggles the desktop dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the dropdown is open and the click is outside its container, close it.
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-[#1A1A1A] fixed top-0 left-0 w-full z-50 shadow-md font-sans">
      {/* Navbar Container */}
      <nav className="flex justify-between items-center py-4 px-0 sm:px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeAllMenus} className="ml-0 sm:ml-0">
            {/* Using a placeholder for the logo */}
            <div className="h-10 w-10 sm:h-12 sm:w-12 ml-0 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">CC</div>
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-400 transition duration-200 ease-linear text-white bg-transparent border-none focus:outline-none appearance-none"
            >
              VALUE ADDED SERVICES
            </button>
            <div
              className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-[#1A1A1A] text-white mt-2 py-2 w-64 shadow-lg rounded z-50`}
            >
              <Link to="/insurance" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Insurance</Link>
              <Link to="/road-side-assistance" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Road Side Assistance</Link>
              <Link to="/warranty" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Warranty</Link>
              <Link to="/pre-delivery-inspection" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Pre Delivery Inspection</Link>
              <Link to="/denting-painting" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Denting & Painting Work</Link>
              <Link to="/dryclean-polish" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Dryclean & Polish Work</Link>
              <Link to="/rto-work" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">RTO Work</Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden absolute top-6 right-4 flex items-center" onClick={toggleMenu}>
          <button className="text-white bg-transparent border-none">
            {/* Note: Ensure you have Font Awesome loaded for these icons */}
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] text-white font-medium text-xl p-4 pl-8 pr-8 mt-2">
          <Link to="/about" onClick={closeAllMenus} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            ABOUT US
          </Link>
          <Link to="/stock" onClick={closeAllMenus} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            BUY USED CAR
          </Link>
          <Link to="/sell" onClick={closeAllMenus} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            SELL CAR
          </Link>

          {/* VALUE ADDED SERVICES - Mobile Nested Links */}
          <div className="py-2">
            <p className="text-white">VALUE ADDED SERVICES</p>
            <div className="pl-4 text-base">
              <Link to="/insurance" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">Insurance</Link>
              <Link to="/road-side-assistance" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">Road Side Assistance</Link>
              <Link to="/warranty" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">Warranty</Link>
              <Link to="/pre-delivery-inspection" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">Pre Delivery Inspection</Link>
              <Link to="/denting-painting" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">Denting & Painting Work</Link>
              <Link to="/dryclean-polish" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">Dryclean & Polish Work</Link>
              <Link to="/rto-work" onClick={closeAllMenus} className="block py-1 hover:text-yellow-400">RTO Work</Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeAllMenus} className="block py-2 hover:text-yellow-400 transition duration-200 ease-linear no-underline text-white">
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
