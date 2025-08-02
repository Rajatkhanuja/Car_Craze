import React from "react";
import Navbar from "../components/Navbar";
import "./VehicleServices.css";
import { Link } from 'react-router-dom';

// Import images
import challanImage from "../assets/ch.jpg"; 
import serviceHistoryImage from "../assets/service.jpg"; 
import rtoImage from "../assets/rto.jpg";
import carImage from "../assets/Car.png";

const VehicleServices = () => {
  return (
    <>
      <Navbar />
      <div className="vehicle-container">
        <div className="vehicle-grid">
          <div className="vehicle-card">
            <img src={challanImage} alt="Challan Check" className="vehicle-image" />
            <h3 className="vehicle-title">Challan Check</h3>
            <p className="vehicle-description">
              Easily check your pending challans online and make hassle-free payments.
              Avoid penalties and stay informed about your vehicle's status. Our platform
              provides real-time updates and ensures secure transactions, saving you time
              and effort. With just a few clicks, you can settle your fines and hit the
              road with confidence.
            </p>
          </div>

          <div className="vehicle-card">
            <img src={serviceHistoryImage} alt="Car Service History" className="vehicle-image" />
            <h3 className="vehicle-title">Car Service History</h3>
            <p className="vehicle-description">
              Track your vehicle's maintenance records effortlessly. Get detailed insights 
              into your car's service history, ensuring you’re up-to-date on repairs and 
              scheduled checkups. With our system, you'll never miss an important maintenance 
              milestone, keeping your car running smoothly and efficiently.
            </p>
          </div>

          <div className="vehicle-card">
            <img src={rtoImage} alt="RTO Records Info" className="vehicle-image" />
            <h3 className="vehicle-title">RTO Records Info</h3>
            <p className="vehicle-description">
              Access essential RTO details with ease. Our platform provides comprehensive 
              information about your vehicle's registration, ownership, and compliance 
              with road safety norms. Stay informed and avoid any surprises with your car's 
              legal standing. It's simple, fast, and reliable.
            </p>
          </div>

          <div className="vehicle-card">
            <img src={carImage} alt="Car Info" className="vehicle-image" />
            <h3 className="vehicle-title">Car Info</h3>
            <p className="vehicle-description">
              Get detailed information and specifications about cars available in our stock. 
              We provide real photos, prices, and specs to help you make the best decision.
            </p>
          </div>
        </div>
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
              <li><Link to="/stock">Stock Cars</Link></li>
              <li><Link to="/sell">Sell Cars</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
          <p>&copy; 2025 Car Craze. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default VehicleServices;
