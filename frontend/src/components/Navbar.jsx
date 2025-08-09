import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bwm.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-2 no-underline">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-white">Car Listing</span>
        </Link>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black md:bg-transparent md:static md:flex md:items-center md:space-x-6 md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline hover:text-yellow-400 transition"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/sell"
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline hover:text-yellow-400 transition"
              >
                SELL
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline hover:text-yellow-400 transition"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block py-2 px-4 text-white no-underline hover:text-yellow-400 transition"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
