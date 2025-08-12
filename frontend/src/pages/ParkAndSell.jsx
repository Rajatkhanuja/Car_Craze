import React from "react";
import carImage from "../assets/service.jpg";
import "./ParkAndSell.css";

const ParkAndSell = () => {
  const handleGetInTouch = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="park-sell-container">
      <div className="park-sell-content">
        <img 
          src={carImage} 
          alt="Car Service" 
          className="car-image" 
        />
        
        <div className="park-sell-text">
          <h1>PARK & SELL PROGRAM</h1>
          
          <div className="purpose-section">
            <h5 className="section-title">PURPOSE</h5>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Chances of getting Best Price as per Market Demand.</span>
              </div>
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Help in getting expertise and professional advice from our Team.</span>
              </div>
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Easy and Transparent Process.</span>
              </div>
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Hassle Free Documentation.</span>
              </div>
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Routine Cleaning, Safety & Security of Car is our responsibility.</span>
              </div>
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Weekly WhatsApp Update consisting of Price Quotes.</span>
              </div>
              <div className="benefit-item">
                <span className="bullet">•</span>
                <span>Suggestions in making your car in Intact Selling Condition.</span>
              </div>
            </div>
          </div>

          <button className="get-in-touch-btn" onClick={handleGetInTouch}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkAndSell;
