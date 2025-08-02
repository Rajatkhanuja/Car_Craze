import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Adjust path as needed
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("adminToken"); // Check if adminToken exists
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
    document.querySelector('.navbar-hamburger').classList.toggle('active');
};

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Car Craze Admin Logo" />
      </div>

      {/* Hamburger icon for mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Links (conditionally rendered) */}
      {isLoggedIn && (
    <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      <Link to="/stock-cars"> Add Stock Cars</Link>
      <Link to="/sell-car">Sell Car Info.</Link>
      <Link to="/update-service">view & update stock cars</Link>
      <Link to="/contact-info">Contact Info.</Link>
      {/* Logout Button */}
      <button className="navbar-logout" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  )}
    </header>
  );
}

export default Navbar;