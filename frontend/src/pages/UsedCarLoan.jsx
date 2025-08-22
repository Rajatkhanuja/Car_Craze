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
                At <span className="brand-name">CAR CRAZE</span>, we understand that buying a car is a big decision — and We're here to make it easier. 
                We offer reliable used car loan assistance through our Trusted Finance Partners. Whether you're a first-time buyer or looking for an upgrade, 
                you can get <span className="highlight">Quick Approvals, Competitive Interest Rates, and Flexible EMI Options</span> — all with Minimal Paperwork.
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
                <p>Lowest Interest Rates starting at 10.99% per annum</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📋</div>
                <h4>Minimal Paperwork</h4>
                <p>Simple documentation process with digital verification</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔄</div>
                <h4>Flexible EMIs</h4>
                <p>Choose Repayment Tenure - Upto 72 Months as per your Budget</p>
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
                  <span className="feature-value">Starting at 10.99% p.a.</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Tenure:</span>
                  <span className="feature-value">Upto 7 Years</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Processing Fee:</span>
                  <span className="feature-value">As low as 1%</span>
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

          {/* Eligibility Criteria Section */}
          <div className="eligibility-section">
            <h3 className="subsection-title">Eligibility Criteria</h3>
            <div className="eligibility-container">
              <div className="eligibility-grid">
                <div className="eligibility-card">
                  <div className="eligibility-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="eligibility-title">Age</h4>
                  <p className="eligibility-desc">18-63 years of age</p>
                </div>

                <div className="eligibility-card">
                  <div className="eligibility-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="eligibility-title">Employment Status</h4>
                  <p className="eligibility-desc">Serving everyone - salaried, self-employed, and pensioners</p>
                </div>

                <div className="eligibility-card">
                  <div className="eligibility-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2v20m5-5l-5 5-5-5" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="#1976d2" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="eligibility-title">Minimum Income</h4>
                  <p className="eligibility-desc">Minimum income of ₹15,000 per month</p>
                </div>

                <div className="eligibility-card">
                  <div className="eligibility-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="eligibility-title">Credit Score</h4>
                  <p className="eligibility-desc">Credit score of 650 or above</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Banks */}
          <div className="partners-section">
            <h3 className="subsection-title">Our Banking Partners</h3>
            <div className="partners-grid">
              <div className="partner-item">IDFC First Bank</div>
              <div className="partner-item">Bajaj Finserv</div>
              <div className="partner-item">Mahindra Finance</div>
              <div className="partner-item">AU Small Finance Bank</div>
              <div className="partner-item">IndusInd Bank</div>
              <div className="partner-item">Kogta Financial</div>
              <div className="partner-item">HDB Financial Services</div>
              <div className="partner-item">Cars24 Financial Services</div>
              <div className="partner-item">Equitas Small Finance Bank</div>
              <div className="partner-item">Piramal Finance</div>
              <div className="partner-item">Cholamandalam Finance</div>
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