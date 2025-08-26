import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "", // This will store the selected option's value
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        // Clear the form after successful submission
        setFormData({ name: "", phoneNumber: "", message: "" });
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
  <p><strong className="car-title text-center">Car Craze</strong></p>

  


  <p>Near Bhairavgarh Resort, 200 Ft Khelgaon Road, Sukher, Udaipur, Rajasthan 313001</p>

  <p><strong>Email:</strong> <a href="mailto:crazeudr@gmail.com">carcrazeudr@gmail.com</a></p>
<p className="text-sm text-black flex flex-wrap justify-center text-center gap-1 items-center">
  <strong className="text-red-500">Phone:</strong>
  <a href="tel:+918094559521" className="hover:underline whitespace-nowrap text-black">
    +91 8094559521
  </a>,
  <a href="tel:+918369908950" className="hover:underline whitespace-nowrap text-black">
    +91 8369908950
  </a>
</p>





  <div className="opening-hours  mt-3 px-4 sm:px-0 text-sm text-white">
    <h3 className="text-lg font-semibold mb-2 text-red-500">Business Hours</h3>
    <p   className="mb-1">Monday to Saturday: 10:00 AM – 7:30 PM</p>
    <p>Sunday: 10:00 AM – 3:00 PM</p>
  </div>
  <div className="flex flex-col items-center mb-4">
  {/* Follow Us Text */}
  <span className="text-black font-medium mb-2">Follow Us:</span>

  {/* Icons Row */}
  <div className="flex gap-4">
    {/* Instagram Icon */}
    <a
      href="https://www.instagram.com/carcrazeudaipur"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 text-2xl hover:scale-110 transition-transform"
    >
      <i className="fab fa-instagram"></i>
    </a>

    {/* WhatsApp Icon */}
    <a
      href="https://wa.me/918094559521"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 text-2xl hover:scale-110 transition-transform"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
</div>

</div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isLoading} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              disabled={isLoading}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="serviceSelect">Help & Support</label>
            <select
              id="serviceSelect"
              name="message" // This is crucial for handleChange to update formData.message
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">-- Please choose an option --</option> {/* Default option */}

              {/* Car Services */}
              <optgroup label="🚗 Car Services">
                <option value="Buy Used Car">Buy Used Car</option>
                <option value="Sell Car">Sell Car</option>
                <option value="Park and Sell">Park and Sell</option>
                <option value="Used Car Loan">Used Car Loan</option>
              </optgroup>

              {/* Assistance & Protection */}
              <optgroup label="🛡️ Assistance & Protection">
                <option value="Insurance">Insurance</option>
                <option value="Road Side Assistance">Road Side Assistance</option>
                <option value="Warranty">Warranty</option>
                <option value="RTO Work">RTO Work</option>
              </optgroup>

              {/* Vehicle Care */}
              <optgroup label="🧰 Vehicle Care">
                <option value="Pre-Delivery Inspection">Pre-Delivery Inspection</option>
                <option value="Denting & Painting Work">Denting & Painting Work</option>
                <option value="Dryclean & Polish Work">Dryclean & Polish Work</option>
              </optgroup>
           
            </select>
          </div>

          {/* --- Display the selected option here --- */}
          {formData.message && ( // Only show this div if a message is selected
            <div className="selected-message-display">
              <p><strong>Selected Service:</strong> {formData.message}</p>
            </div>
          )}
          {/* -------------------------------------- */}

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.6124914546544!2d73.72336347519266!3d24.637037378075817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b31694639d%3A0x8b40dfa4830df303!2sCar%20Craze!5e0!3m2!1sen!2sin!4v1755346505473!5m2!1sen!2sin" // Corrected Google Maps embed URL
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
      <p>
        We are Car Craze, your trusted platform for selling and buying cars. Our mission is to provide excellent services to our users with a focus on quality and trust.
      </p>
    </div>

    <div className="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/stock">Buy Used Car</Link></li>
        <li><Link to="/sell">Sell Car</Link></li>
        <li><Link to="/loyalty">LOYALTY PROGRAM</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h3>Contact Us</h3>
      <p><i className="fas fa-phone-alt icon-right"></i> +91 8094559521, +91 8369908950</p>
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