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
              At <span className="brand-name">CAR CRAZE</span>, we make buying a used car simple, transparent, and reliable.
              Whether you're a first-time buyer or looking for an upgrade, our wide selection of certified pre-owned cars
              ensures that you get <span className="highlight">quality, performance, and value</span> — all in one place.
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
                <h4>Trusted Dealers</h4>
                <p>We only list vehicles from verified sellers and showrooms.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h4>Full Transparency</h4>
                <p>From service history to insurance, we give you all the details upfront.</p>
              </div>
            </div>
          </div>

          <div className="services-section">
            <h3 className="subsection-title">Services We Offer</h3>
            <div className="services-list">
              <div className="service-item">🚗 Buy & Sell Used Cars</div>
              <div className="service-item">💰 Loan Assistance</div>
              <div className="service-item">🔧 Denting & Painting Work</div>
              <div className="service-item">✨ Dryclean & Polish Work</div>
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
