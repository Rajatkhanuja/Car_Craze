import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './EditCar.css';

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  const fetchCarDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/${id}`);
      setCar(response.data);
      setPrice(response.data.price);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch car details: ' + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/cars/${id}`, { price });
      navigate('/update-service');
    } catch (err) {
      setError('Failed to update price: ' + (err.response?.data?.message || err.message));
    }
  };

  const getImageUrl = (photoPath) => {
    if (!photoPath) return null;
    if (photoPath.startsWith('http')) return photoPath;
    const normalizedPath = photoPath.replace(/\\/g, '/');
    const cleanPath = normalizedPath.replace(/^(?:uploads\/)?/, '').replace(/^\/+/, '');
    return `http://localhost:5000/uploads/${cleanPath}`;
  };

  if (loading) {
    return (
      <div className="container">
        <Navbar />
        <div className="loading-container">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="container">
        <Navbar />
        <div className="error-message">Car not found</div>
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar />
      <div className="car-edit-card">
        <h1 className="page-header">Edit Car Price</h1>
        
        {error && <div className="error-message">{error}</div>}

        <div className="car-details-grid">
          <div className="car-image-container">
            {car.photo1 && (
              <img
                src={getImageUrl(car.photo1)}
                alt="Car"
                className="car-image"
                onError={(e) => {
                  e.target.src = '/placeholder-car.jpg';
                }}
              />
            )}
          </div>
          
          <div className="form-group">
            <div>
              <div className="detail-label">Name</div>
              <div className="detail-value">{car.name}</div>
            </div>
            
            <div>
              <div className="detail-label">Model</div>
              <div className="detail-value">{car.model}</div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  Price (INR)
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="button-group">
                <button
                  type="submit"
                  className="button button-primary"
                >
                  Update Price
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/update-service')}
                  className="button button-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCar;