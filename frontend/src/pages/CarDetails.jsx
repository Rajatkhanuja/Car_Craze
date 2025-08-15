import React, { useState, useEffect } from 'react';
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
import noOdometer from '../assets/non-flooded.ba7c4986.svg';
import noWaterDamage from '../assets/non-tempered.91878cdb.svg';
import qualityCheck from '../assets/quality-check.c7af26d2.svg';

const API_URL = process.env.REACT_APP_API_URL;

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [stockCars, setStockCars] = useState([]);

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
        setStockCars(res.data.slice(0, 3));
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
      const interval = setInterval(() => {
        setMainImage((i) => (i + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [photos]);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
    }).format(price);

  const handleMoreCars = () => navigate('/stock');

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!car) return <div className="error">Car not found</div>;

  return (
    <div className="car-details-container">
      <div className="car-details-content">
        <h1 className="car-title">{car.name} – {car.model}</h1>

        <div className="car-gallery">
          <div className="main-image">
            <img
              src={photos[mainImage]}
              alt={`${car.name} main view`}
              onError={(e) => (e.target.src = '/placeholder-car.jpg')}
            />
          </div>
          <div className="thumbnail-container">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className={`thumbnail ${mainImage === idx ? 'active' : ''}`}
                onClick={() => setMainImage(idx)}
              >
                <img
                  src={photo}
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
                <span>Reg. Year:</span> {car.year}
              </div>
              <div className="info-item">
                <img src={fuelImg} alt="Fuel" className="info-icon" />
                <span>Fuel:</span> {car.fuel}
              </div>
              <div className="info-item">
                <img src={odometerImg} alt="KM Driven" className="info-icon" />
                <span>KM Driven:</span> {car.running}
              </div>
              <div className="info-item">
                <img src={transmissionImg} alt="Transmission" className="info-icon" />
                <span>Transmission:</span> {car.transmission}
              </div>
              <div className="info-item">
                <img src={ownershipImg} alt="Ownership" className="info-icon" />
                <span>Ownership:</span> {car.ownership}
              </div>
              <div className="info-item">
                <img src={insuranceImg} alt="Insurance" className="info-icon" />
                <span>Insurance:</span> {car.insurance}
              </div>
              <div className="info-item">
                <img src={rtoImg} alt="Reg Number" className="info-icon" />
                <span>Reg. Number:</span> {car.registration}
              </div>
            </div>
            <div className="price-section">
              <span>Price:</span> {formatPrice(car.price)}
            </div>
          </div>

          <div className="car-inspection-report">
            <h3>Car Inspection Report</h3>
            <div className="inspection-grid">
              <div className="inspection-item">
                <img src={noAccident} alt="No accident history" />
                <span>No Accident History</span>
              </div>
              <div className="inspection-item">
                <img src={noWaterDamage} alt="No odometer tampering" />
                <span>No Odometer Tampering</span>
              </div>
              <div className="inspection-item">
                <img src={noOdometer} alt="No water damages" />
                <span>No Water Damages</span>
              </div>
              <div className="inspection-item">
                <img src={qualityCheck} alt="118 Quality Checks" />
                <span>118 Quality Checks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-cars">
        <h2>Related Cars</h2>
        <div className="stock-cars-grid">
          {stockCars.map((stockCar, idx) => (
            <div key={idx} className="car-card">
              <img
                src={stockCar.photo1}
                alt={stockCar.name}
                className="car-img"
                onError={(e) => (e.target.src = '/placeholder-car.jpg')}
              />
              <div className="car-info">
                <h3 className="car-name">{stockCar.name} – {stockCar.model}</h3>
                <p><strong>Price:</strong> {formatPrice(stockCar.price)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="more-cars-container">
          <button className="more-cars-btn" onClick={handleMoreCars}>
            More Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
