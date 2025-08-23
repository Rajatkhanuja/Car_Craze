// src/pages/BuyUsedCar.jsx

import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom'; // ✅ navigation hook
import "./buyused.css";
import carImage from "../assets/Car.png";

const BuyUsedCar = () => {
  const navigate = useNavigate(); // ✅ define navigate

  return (
    <>
      <Navbar />
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${carImage})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-heading">Find Your Perfect Used Car</h1>
          <p className="hero-subtext">Quality • Performance • Value</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="intro-section">
            <h2 className="section-title">Find the Perfect Used Car with Confidence!</h2>
            <p className="intro-text">
              At <span className="brand-name">CAR CRAZE</span>, we make buying a used car simple, Transparent, and Reliable.
              Whether you're a first-time buyer or looking for an upgrade, our wide selection of certified pre-owned cars
              ensures that you get <span className="highlight">Quality, Performance, and Value</span> — All in one place.
            </p>
          </div>

          <div className="why-section">
            <h3 className="subsection-title">Why Buy from CAR CRAZE?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h4>Certified Vehicles</h4>
                <p>Every car is thoroughly inspected and verified for quality and condition.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">₹</div>
                <h4>Best Price Guarantee</h4>
                <p>No hidden charges. What you see is what you pay.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">★</div>
                <h4>Widest Choice</h4>
                <p>Find cars from every Brand, Model, & Budget.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h4>Full Transparency</h4>
                <p>From service history to insurance, we give you all the details upfront.</p>
              </div>
            </div>
          </div>

          
          <div className="cta-section">
            <h3 className="cta-title">Ready to Own Your Next Car?</h3>
            <p className="cta-text">
              With <span className="brand-name">CAR CRAZE</span>, you're not just buying a car — you're buying peace of mind.
              Find the perfect ride at the right price with zero stress.
            </p>
            <div className="cta-tagline">
              <strong>Scroll. Select. Settle. – Buy Smarter with CAR CRAZE.</strong>
            </div>

            <button className="cta-button" onClick={() => navigate("/stock")}>
              Start Your Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyUsedCar;
