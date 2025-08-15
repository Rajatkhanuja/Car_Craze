import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CarDetails.css';

const API_URL = process.env.REACT_APP_API_URL; // ✅ Backend URL from env (for API calls)

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
        const response = await axios.get(`${API_URL}/cars`);
        setStockCars(response.data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching stock cars:', err);
      }
    };

    fetchCarDetails();
    fetchStockCars();
  }, [id]);

  const photos = car ? [car.photo1, car.photo2, car.photo3, car.photo4, car.photo5].filter(Boolean) : [];

  useEffect(() => {
    if (photos.length > 0) {
      const interval = setInterval(() => {
        setMainImage((prevIndex) => (prevIndex + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [photos]);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 1, // 🔁 allow 1 digit after decimal
      minimumFractionDigits: 1
    }).format(price);

  const handleMoreCars = () => {
    navigate('/stock');
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!car) return <div className="error">Car not found</div>;

  return (
    <div className="car-details-container">
      {/* Main Content Section */}
      <div className="car-details-content">
        <h1 className="car-title">{car.name} - {car.model}</h1>

        <div className="car-gallery">
          <div className="main-image">
            <img
              src={photos[mainImage]} // ✅ Direct Cloudinary URL
              alt={`${car.name} main view`}
              onError={(e) => { e.target.src = '/placeholder-car.jpg'; }}
            />
          </div>

          <div className="thumbnail-container">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`thumbnail ${mainImage === index ? 'active' : ''}`}
                onClick={() => setMainImage(index)}
              >
                <img
                  src={photo} // ✅ Direct Cloudinary URL
                  alt={`${car.name} view ${index + 1}`}
                  onError={(e) => { e.target.src = '/placeholder-car.jpg'; }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="car-info">
            {/* Car Overview Section */}
            <div className="car-overview">
                <h3>Car Overview</h3>
                <div className="info-grid">
                    <div className="info-item"><span>Reg. Year:</span> {car.year}</div>
                    <div className="info-item"><span>Fuel:</span> {car.fuel}</div>
                    <div className="info-item"><span>KM Driven:</span> {car.running}</div>
                    <div className="info-item"><span>Transmission:</span> {car.transmission}</div>
                    <div className="info-item"><span>Ownership:</span> {car.ownership}</div>
                    <div className="info-item"><span>Insurance:</span> {car.insurance}</div>
                    <div className="info-item"><span>Reg. Number:</span> {car.registration}</div>
                </div>
                <div className="price-section">
                    <span>Price:</span> {formatPrice(car.price)}
                </div>
            </div>

            {/* Car Inspection Report Section */}
            <div className="car-inspection-report">
                <h3>Car Inspection Report</h3>
                <div className="inspection-grid">
                    <div className="inspection-item">
                        <img src="/no-accident.png" alt="No accident history" /> {/* Placeholder image */}
                        <span>No Accident History</span>
                    </div>
                    <div className="inspection-item">
                        <img src="/no-odometer.png" alt="No odometer tampering" /> {/* Placeholder image */}
                        <span>No Odometer Tampering</span>
                    </div>
                    <div className="inspection-item">
                        <img src="/no-water-damage.png" alt="No water damages" /> {/* Placeholder image */}
                        <span>No Water Damages</span>
                    </div>
                    <div className="inspection-item">
                        <img src="/quality-check.png" alt="118 Quality Checks" /> {/* Placeholder image */}
                        <span>118 Quality Checks</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Related Cars Section */}
      <div className="related-cars">
        <h2>Related Cars</h2>
        <div className="stock-cars-grid">
          {stockCars.map((stockCar, index) => (
            <div key={index} className="car-card">
              <img
                src={stockCar.photo1} // ✅ Direct Cloudinary URL
                alt={stockCar.name}
                className="car-img"
                onError={(e) => { e.target.src = '/placeholder-car.jpg'; }}
              />
              <div className="car-info">
                <h3 className="car-name">{stockCar.name} - {stockCar.model}</h3>
                <p><strong>Price:</strong> {formatPrice(stockCar.price)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="more-cars-container">
          <button
            className="more-cars-btn"
            onClick={handleMoreCars}
          >
            More Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;