import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">About <span className="brand-highlight">CAR CRAZE</span></h1>
            <p className="hero-subtitle">Your Trusted Automotive Partner Since 2004</p>
            <div className="experience-badge">
              <span className="badge-number">20+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <div className="content-section">
            <div className="section-header">
              <h2>Our Story</h2>
              <div className="header-line"></div>
            </div>
            <div className="story-grid">
              <div className="story-text">
                <p className="highlight-para">
                  Welcome to <strong className="brand-text">CAR CRAZE</strong>, a trusted name in the automotive industry since our establishment in 2004.
                  With over two decades of experience, we have proudly emerged as seasoned experts in the sale and purchase of 
                  non-accidental and non-odometer tempered cars.
                </p>
                <p>
                  Our commitment to providing a seamless automotive experience led us to become a 
                  <strong className="accent-text"> one-stop solution</strong> for all your car-related needs.
                </p>
              </div>
              <div className="story-visual">
                <div className="visual-card">
                  <div className="logo-container">
                    <img src={logo} alt="CAR CRAZE Logo" className="company-logo" />
                  </div>
                  <h3>Since 2004</h3>
                  <p>Trusted Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="features-section">
            <div className="section-header">
              <h2>Why Choose CAR CRAZE?</h2>
              <div className="header-line"></div>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Trust & Reliability</h3>
                <p>20+ years of proven expertise in automotive industry</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Transparency</h3>
                <p>Complete vehicle history and detailed documentation</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Quality Assurance</h3>
                <p>Only certified, non-accidental vehicles</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Customer First</h3>
                <p>Dedicated service and complete satisfaction</p>
              </div>
            </div>
          </div>

          <div className="mission-section">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-text">
                At CAR CRAZE, we understand that buying or selling a car involves more than a transaction – 
                it's about <strong className="highlight-text">trust, reliability, and satisfaction</strong>. Our dedicated team works tirelessly 
                to ensure that each customer receives the highest level of service, whether you are looking to finance your dream car, 
                secure the right insurance, or simply explore our extensive range of certified vehicles.
              </p>
              <div className="mission-highlight">
                <p>
                  What sets us apart is our emphasis on <strong className="accent-text">transparency and accountability</strong>. Every certified car 
                  at CAR CRAZE comes with a detailed history, providing you with the confidence and peace of mind you deserve.
                </p>
              </div>
            </div>
          </div>

          <div className="partners-section">
            <div className="section-header">
              <h2>Our Financial Partners</h2>
              <div className="header-line"></div>
            </div>
            <p className="partners-intro">
              We take pride in our longstanding partnerships with leading financial institutions, ensuring you have access 
              to a variety of financing options tailored to your needs.
            </p>
            <div className="partners-grid">
              <div className="partner-card">IDFC Bank</div>
              <div className="partner-card">Bajaj Finance</div>
              <div className="partner-card">Mahindra & Mahindra Finance</div>
              <div className="partner-card">AU Small Finance</div>
              <div className="partner-card">IndusInd Bank</div>
            </div>
          </div>

          <div className="commitment-section">
            <div className="commitment-content">
              <h2>Our Commitment to You</h2>
              <p>
                As an established player in the market, CAR CRAZE remains committed to delivering excellence in every aspect of 
                the automotive journey. Whether you are a buyer or a seller, our mission is to make your experience with us 
                <strong className="highlight-text"> memorable, reliable, and hassle-free</strong>.
              </p>
            </div>
          </div>

          <div className="thank-you-section">
            <div className="thank-you-content">
              <div className="heart-icon">❤️</div>
              <h2>Thank You</h2>
              <p><strong>Thank you</strong> for considering CAR CRAZE for all your automotive needs.</p>
              <Link to="/contact" className="cta-button">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;