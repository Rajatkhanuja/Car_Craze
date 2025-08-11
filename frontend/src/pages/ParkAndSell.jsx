import React from "react";
import Navbar from "../components/Navbar";
import carImage from "../assets/service.jpg";
import "./ParkAndSell.css";

const ParkAndSell = () => {
  const handleGetInTouch = () => {
    alert("We will get in touch with you soon!");
    // You can add contact functionality here
  };

  return (
    <>
      <Navbar />
      <div className="park-sell-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Park and Sell</h1>
            <p className="hero-subtitle">
              Park your car in a safe place and get the best price
            </p>
          </div>
          <div className="hero-image-container">
            <img src={carImage} alt="Car Service" className="hero-image" />
            <button className="overlay-button" onClick={handleGetInTouch}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3>Secure Parking</h3>
            <p>
              Your car is completely safe here with 24/7 security and CCTV surveillance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Returns</h3>
            <p>
              We get you the best price for your car. No hidden charges.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Process</h3>
            <p>
              We handle the entire process smoothly and quickly until your car is sold.
            </p>
          </div>
        </div>

        <div className="info-section">
          <h2>Why Choose Our Service?</h2>
          <p>
            At Car Craze, you can safely park your car and also sell it with ease. 
            Our expert team evaluates your car and ensures you get the best market price.
          </p>
          <p>
            Complete security, transparent process, and customer satisfaction are our top priorities. 
            Your car stays safe with us until it gets sold.
          </p>
        </div>

        <div className="cta-section">
          <h2>Start Today!</h2>
          <p>Park your car safely and get the best price</p>
          <button className="cta-button" onClick={handleGetInTouch}>
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default ParkAndSell;
