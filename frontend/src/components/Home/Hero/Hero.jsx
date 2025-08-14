import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import s from '../../../assets/s.jpg';
import r from '../../../assets/r.jpg';
import g from '../../../assets/g.jpg';
import q from '../../../assets/q.jpg';
import w from '../../../assets/w.jpg';
import challanImage from '../../../assets/ch.jpg';
import serviceHistoryImage from '../../../assets/service.jpg';
import rtoImage from '../../../assets/rto.jpg';
import carImage from '../../../assets/Car.png';

import './Home.css';

const API_URL = process.env.REACT_APP_API_URL; // ✅ from .env

const Hero = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${API_URL}/cars?nocache=${Date.now()}`);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 1, // 🔁 allow 1 digit after decimal
    minimumFractionDigits: 1  // ✅ ensure .0 is also shown (like 4.0)
    }).format(price);
  };

  return (
    <>
      <header id="header" className="hero-header">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={s} className="d-block w-100 carousel-img img-1" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src={r} className="d-block w-100 carousel-img img-2" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src={g} className="d-block w-100 carousel-img img-3" alt="Image 3" />
            </div>
            <div className="carousel-item">
              <img src={q} className="d-block w-100 carousel-img img-4" alt="New Image 1" />
            </div>
            <div className="carousel-item">
              <img src={w} className="d-block w-100 carousel-img img-5" alt="New Image 2" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      {/* ✅ Updated Services Section with Images */}
      <section id="services" className="services-section">
  <div className="services-container">
    <div className="desktop-view">

      <Link to="/buy-used-car" className="service-box">
        <img src={carImage} alt="Buy Used Car" className="service-image" />
        <h3>Buy Used Car</h3>
      </Link>

      <Link to="/used-car-loan" className="service-box">
        <img src={challanImage} alt="Used Car Loan" className="service-image" />
        <h3>Used Car Loan</h3>
      </Link>

      <Link to="/sell-car" className="service-box">
        <img src={rtoImage} alt="Sell Car" className="service-image" />
        <h3>Sell Car</h3>
      </Link>

      <Link to="/park-and-sell" className="service-box">
        <img
          src={serviceHistoryImage}
          alt="Denting & Polish Work"
          className="service-image full-image"
        />
        <h3>Park & Sell</h3>
      </Link>

    </div>
  </div>
</section>

     <section id="cars-in-stock" class="cars-in-stock-section">
  <h2 class="section-title">Our Cars in Stock</h2>
  <div class="horizontal-scroll">
    <div class="car-card-wrapper">
      {cars.slice(0, 6).map((car, index) => (
        <div
          key={index}
          class="car-card"
          onClick={() => navigate(`/car-details/${car._id}`)}
        >
          <img
            src={car.photo1}
            alt={car.name}
            class="car-img"
            onError={(e) => (e.target.src = "/placeholder-car.jpg")}
          />
          <div class="badge">CARCRAZE Assured</div>
          <div class="car-info">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h3 class="car-name" style="margin: 0;">
                <span class="car-title">{car.year} {car.name}</span>
                <span class="car-variant">{car.model}</span>
              </h3>
              <div class="car-price" style="text-align: right;">
                
                <div class="price-details">
                  
                  <span class="new-price">₹{car.price} lakh</span>
                </div>
                <div class="extra-charges">+ other charges</div>
              </div>
            </div>

            <div class="car-badges">
              <span>{car.running}</span>
              <span>{car.fuel}</span>
              <span>{car.transmission}</span>
              <span>{car.registration}</span>
            </div>
          </div>
        </div>
      ))}
      <div class="car-card view-more-circle" onClick={() => navigate("/cars")}>
        <span>+</span>
      </div>
    </div>
  </div>
</section>

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
            <p><i className="fas fa-map-marker-alt"></i>Near Bhairavgarh Resort, 200 Ft Khelgaon Road, Sukher, Udaipur, Rajasthan 313001</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Car Craze. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Hero;
