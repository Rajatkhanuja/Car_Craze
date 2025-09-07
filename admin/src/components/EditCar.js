import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './EditCar.css';

const API_URL = process.env.REACT_APP_API_URL;

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Add all fields
  const [price, setPrice] = useState('');
  const [regYear, setRegYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [transmission, setTransmission] = useState('');
  const [ownership, setOwnership] = useState('');
  const [insurance, setInsurance] = useState('');
  const [regNumber, setRegNumber] = useState('');

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  const fetchCarDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/cars/${id}`);
      const carData = response.data;
      setCar(carData);

      // ✅ Pre-fill values
      setPrice(carData.price || '');
      setRegYear(carData.regYear || '');
      setFuel(carData.fuel || '');
      setKmDriven(carData.kmDriven || '');
      setTransmission(carData.transmission || '');
      setOwnership(carData.ownership || '');
      setInsurance(carData.insurance || '');
      setRegNumber(carData.regNumber || '');

      setLoading(false);
    } catch (err) {
      setError('Failed to fetch car details: ' + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Send all updated fields
      await axios.patch(`${API_URL}/cars/${id}`, {
        price,
        regYear,
        fuel,
        kmDriven,
        transmission,
        ownership,
        insurance,
        regNumber
      });
      navigate('/update-service');
    } catch (err) {
      setError('Failed to update details: ' + (err.response?.data?.message || err.message));
    }
  };

  const getImageUrl = (photoPath) => {
    if (!photoPath) return null;
    if (photoPath.startsWith('http')) return photoPath;
    const normalizedPath = photoPath.replace(/\\/g, '/');
    const cleanPath = normalizedPath.replace(/^(?:uploads\/)?/, '').replace(/^\/+/, '');
    return `${API_URL}/uploads/${cleanPath}`;
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
        <h1 className="page-header">Edit Car Details</h1>

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

            {/* ✅ Edit Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="price" className="form-label">Price (INR)</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="regYear" className="form-label">Registration Year</label>
                <input type="number" id="regYear" value={regYear} onChange={(e) => setRegYear(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="fuel" className="form-label">Fuel</label>
                <input type="text" id="fuel" value={fuel} onChange={(e) => setFuel(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="kmDriven" className="form-label">KM Driven</label>
                <input type="number" id="kmDriven" value={kmDriven} onChange={(e) => setKmDriven(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="transmission" className="form-label">Transmission</label>
                <input type="text" id="transmission" value={transmission} onChange={(e) => setTransmission(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="ownership" className="form-label">Ownership</label>
                <input type="text" id="ownership" value={ownership} onChange={(e) => setOwnership(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="insurance" className="form-label">Insurance</label>
                <input type="text" id="insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)} className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="regNumber" className="form-label">Registration Number</label>
                <input type="text" id="regNumber" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} className="form-input" required />
              </div>

              <div className="button-group">
                <button type="submit" className="button button-primary">Update</button>
                <button type="button" onClick={() => navigate('/update-service')} className="button button-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCar;
