// CarDetails.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CarDetails.css';

// Import overview icons from src/assets
import regYearImg from '../assets/reg-year.jpg';
import fuelImg from '../assets/fuel.jpg';
import odometerImg from '../assets/odometer.jpg';
import transmissionImg from '../assets/transmission.jpg';
import ownershipImg from '../assets/ownership.jpg';
import insuranceImg from '../assets/insurance.jpg';
import rtoImg from '../assets/rtoo.jpg';
// Import inspection images (SVG & PNG)
import noAccident from '../assets/non-accidental.33bf2d20.svg';
import noOdometer from '../assets/non-flooded.ba7c4986.svg'; // This was previously named noWaterDamage, corrected for clarity based on use
import noWaterDamage from '../assets/non-tempered.91878cdb.svg'; // This was previously named noOdometer, corrected for clarity based on use
import qualityCheck from '../assets/quality-check.c7af26d2.svg';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Fallback for API_URL

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [stockCars, setStockCars] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        if (!id) throw new Error('Invalid car ID');
        const response = await axios.get(`${API_URL}/cars/${id}`);
        setCar(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching car details:', err);
        setError(err.response?.data?.message || 'Failed to fetch car details.');
        setLoading(false);
      }
    };

    const fetchStockCars = async () => {
      try {
        const res = await axios.get(`${API_URL}/cars`);
        // Filter out the current car and take the first 5 related cars
        setStockCars(res.data.filter(stockCar => stockCar._id !== id).slice(0, 5));
      } catch (err) {
        console.error('Error fetching stock cars:', err);
      }
    };

    fetchCarDetails();
    fetchStockCars();
  }, [id]);

  const photos = car
    ? [car.photo1, car.photo2, car.photo3, car.photo4, car.photo5].filter(Boolean)
    : [];

  useEffect(() => {
    if (photos.length > 0) {
      clearInterval(intervalRef.current); // Clear any existing interval
      intervalRef.current = setInterval(() => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 5000); // Change every 5 seconds
    }
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [photos]);

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
    clearInterval(intervalRef.current); // Stop auto-change on manual click
    // Optionally, restart the interval after a delay if desired, or keep it stopped
    intervalRef.current = setInterval(() => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
  };

  const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
  }).format(price);
};


  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!car) return <div className="error">Car not found</div>;

  return (
    <div className="car-details-container">
      <div className="car-details-content">
        <h1 className="car-title">{car.name} – {car.model}</h1>

        <div className="car-gallery">
          <div className="main-image-wrapper">
            <img
              src={photos[mainImageIndex] || '/placeholder-car.jpg'}
              alt={`${car.name} main view`}
              className="main-image"
              onError={(e) => (e.target.src = '/placeholder-car.jpg')}
            />
            {photos.length > 1 && (
              <div className="gallery-nav-buttons">
                <button 
                  className="nav-button prev" 
                  onClick={() => handleThumbnailClick((mainImageIndex - 1 + photos.length) % photos.length)}
                >
                  &#10094; {/* Left arrow */}
                </button>
                <button 
                  className="nav-button next" 
                  onClick={() => handleThumbnailClick((mainImageIndex + 1) % photos.length)}
                >
                  &#10095; {/* Right arrow */}
                </button>
              </div>
            )}
          </div>
          <div className="thumbnail-container">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className={`thumbnail ${mainImageIndex === idx ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(idx)}
              >
                <img
                  src={photo || '/placeholder-car.jpg'}
                  alt={`${car.name} view ${idx + 1}`}
                  onError={(e) => (e.target.src = '/placeholder-car.jpg')}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="car-info">
          <div className="car-overview">
            <h3>Car Overview</h3>
            <div className="info-grid">
              <div className="info-item">
                <img src={regYearImg} alt="Reg Year" className="info-icon" />
                <span>Reg. Year</span> {car.year || 'N/A'}
              </div>
              <div className="info-item">
                <img src={fuelImg} alt="Fuel" className="info-icon" />
                <span>Fuel</span> {car.fuel || 'N/A'}
              </div>
              <div className="info-item">
                <img src={odometerImg} alt="KM Driven" className="info-icon" />
                <span>KM Driven</span> {car.running ? `${car.running} km` : 'N/A'}
              </div>
              <div className="info-item">
                <img src={transmissionImg} alt="Transmission" className="info-icon" />
                <span>Transmission</span> {car.transmission || 'N/A'}
              </div>
              <div className="info-item">
                <img src={ownershipImg} alt="Ownership" className="info-icon" />
                <span>Ownership</span> {car.ownership || 'N/A'}
              </div>
              
              <div className="info-item">
                <img src={insuranceImg} alt="Insurance" className="info-icon" />
                <span>Insurance</span> {car.insurance || 'N/A'}
              </div>
              <div className="info-item">
                 <img src={rtoImg} alt="rtoo" className="info-icon" />
                <span>Reg. Number</span> {car.registration || 'N/A'} 
              </div>
            </div>
            <div className="price-section">
              <span className="new-price">₹{car.price} lakh</span>
            </div>
          </div>

          <div className="car-inspection-report">
            <h3>Car Report</h3>
            <div className="inspection-grid">
              <div className="inspection-item">
                <img src={noAccident} alt="No accident history" />
                <span>No Accident History</span>
              </div>
              <div className="inspection-item">
                <img src={noOdometer} alt="No odometer tampering" />
                <span>No Odometer Tampering</span>
              </div>
              <div className="inspection-item">
                <img src={noWaterDamage} alt="No water damages" />
                <span>No Water Damages</span>
              </div>
              <div className="inspection-item">
                <img src={qualityCheck} alt="140-quality check!" />
                <span>118 Quality Check!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-cars-section">
        <h2>Related Cars</h2>
        <div className="related-cars-carousel">
          {stockCars.map((stockCar) => (
            <div 
              key={stockCar._id} 
              className="car-card" 
              onClick={() => navigate(`/car-details/${stockCar._id}`)}
            >
              <img
                src={stockCar.photo1 || '/placeholder-car.jpg'}
                alt={`${stockCar.name} ${stockCar.model}`}
                className="car-img"
                onError={(e) => (e.target.src = '/placeholder-car.jpg')}
              />
              <div className="car-card-content">
                <p className="car-card-name">{stockCar.year} {stockCar.name} {stockCar.model}</p>
                <div className="car-card-details">
                  <span>{stockCar.running}km</span> | 
                  <span> {stockCar.fuel}</span> | 
                  <span> {stockCar.transmission}</span> | 
                  <span> {stockCar.registration}</span>
                </div>
                <p className="car-card-price">
                    <span className="new-price">₹{car.price} lakh</span>
                  <span className="other-charges">+ other charges</span>
                </p>
              </div>
            </div>
          ))}
          <div className="more-cars-button-wrapper">
            <button className="more-cars-btn-circle" onClick={() => navigate("/stock")}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;