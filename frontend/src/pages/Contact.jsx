import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL; // ✅ Env variable se backend URL

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "", // Changed 'email' to 'phoneNumber'
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus("");

    try {
      const response = await fetch(`${API_URL}/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ name: "", phoneNumber: "", message: "" }); // Changed 'email' to 'phoneNumber'
      } else {
        const errorData = await response.json();
        setSubmissionStatus(errorData.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-details">
        <p><strong>Car Craze</strong></p>
        <p>Near Bhairavgarh Resort, 200 Ft Khelgaon Road, Sukher, Udaipur, Rajasthan 313001</p>
        <p><strong>Email:</strong> <a href="mailto:crazeudr@gmail.com">carcrazeudr@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+918094559521">+91 8094559521</a></p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isLoading} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label> {/* Changed label */}
            <input
              type="tel" // Changed type to 'tel' for phone numbers
              name="phoneNumber" // Changed name to 'phoneNumber'
              value={formData.phoneNumber} // Changed value to formData.phoneNumber
              onChange={handleChange}
              required
              disabled={isLoading}
              pattern="[0-9]{10}" // Added pattern for 10 digits
              title="Please enter a 10-digit phone number" // Tooltip for validation
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required disabled={isLoading}></textarea>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {submissionStatus && (
          <p className={`submission-status ${submissionStatus.includes("successfully") ? "success" : "error"}`}>
            {submissionStatus}
          </p>
        )}
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.6124914546544!2d73.72336347519266!3d24.637037378075817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b31694639d%3A0x8b40dfa4830df303!2sCar%20Craze!5e0!3m2!1sen!2sin!4v1734194501838!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We are Car Craze, your trusted platform for selling and buying cars. Our mission is to provide excellent services to our users with a focus on quality and trust.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/stock">BUY USED CAR</Link></li>
              <li><Link to="/sell">SELL CAR</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> +91 8094559521</p>
            <p><i className="fas fa-envelope"></i> carcrazeudr@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Near Bhairavgarh Resort, 200 Ft Khelgaon Road, Sukher, Udaipur, Rajasthan 313001</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Car Craze. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;