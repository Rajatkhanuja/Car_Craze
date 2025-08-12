import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import "./usedcarloan.css";
import carImage from "../assets/ch.jpg";

const UsedCarLoan = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="loan-hero-section" style={{ backgroundImage: `url(${carImage})` }}>
       
      </div>

      {/* Main Content */}
      <div className="loan-content-section">
        <div className="container">

          {/* Introduction Section */}
          <div className="intro-section">
            <h2 className="section-title">Finance Your Dream Car Today!</h2>
            <div className="intro-content">
              <p className="intro-text">
                At <span className="brand-name">CAR CRAZE</span>, we understand that buying a car is a big decision — and we're here to make it easier. 
                We offer reliable used car loan assistance through our trusted finance partners. Whether you're a first-time buyer or looking for an upgrade, 
                you can get <span className="highlight">quick approvals, competitive interest rates, and flexible EMI options</span> — all with minimal paperwork.
              </p>
              <p className="intro-text">
                <strong>With us, driving home your dream car is simpler than ever.</strong>
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="benefits-section">
            <h3 className="subsection-title">Why Choose Our Loan Assistance?</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h4>Quick Approvals</h4>
                <p>Get loan approval within 24-48 hours with our streamlined process</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h4>Competitive Rates</h4>
                <p>Lowest interest rates starting from 8.5% per annum</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📋</div>
                <h4>Minimal Paperwork</h4>
                <p>Simple documentation process with digital verification</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔄</div>
                <h4>Flexible EMIs</h4>
                <p>Choose repayment tenure from 1 to 7 years as per your budget</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✅</div>
                <h4>High Approval Rate</h4>
                <p>95% loan approval rate with our trusted banking partners</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h4>Expert Guidance</h4>
                <p>Personal loan advisor to guide you through the entire process</p>
              </div>
            </div>
          </div>

          {/* Loan Features */}
          <div className="features-section">
            <h3 className="subsection-title">Loan Features</h3>
            <div className="features-container">
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-label">Loan Amount:</span>
                  <span className="feature-value">Up to ₹25 Lakhs</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Interest Rate:</span>
                  <span className="feature-value">Starting from 8.5% p.a.</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Tenure:</span>
                  <span className="feature-value">1 to 7 Years</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Processing Fee:</span>
                  <span className="feature-value">As low as 0.5%</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Down Payment:</span>
                  <span className="feature-value">From 10% onwards</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Processing Time:</span>
                  <span className="feature-value">24-48 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Banks */}
          <div className="partners-section">
            <h3 className="subsection-title">Our Banking Partners</h3>
            <div className="partners-grid">
              <div className="partner-item">SBI</div>
              <div className="partner-item">HDFC Bank</div>
              <div className="partner-item">ICICI Bank</div>
              <div className="partner-item">Axis Bank</div>
              <div className="partner-item">Kotak Mahindra</div>
              <div className="partner-item">Punjab National Bank</div>
              <div className="partner-item">TATA Capital</div>
              <div className="partner-item">Bajaj Finserv</div>
            </div>
          </div>
        </div>
        {/* Contact Button Section */}
<div className="contact-button-section" style={{ textAlign: "center", margin: "40px 0" }}>
  <button 
    className="get-in-touch-btn"
    onClick={() => navigate("/contact")}
    style={{
      backgroundColor: "#2c3e50",
      color: "#fff",
      border: "none",
      padding: "12px 30px",
      fontSize: "1.1rem",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    }}
    onMouseEnter={e => e.target.style.backgroundColor = "#1a242f"}
    onMouseLeave={e => e.target.style.backgroundColor = "#2c3e50"}
  >
    Get in Touch
  </button>
</div>

      </div>
    </>
  );
};

export default UsedCarLoan;
