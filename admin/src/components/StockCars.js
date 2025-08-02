import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './StockCars.css';
import Navbar from './Navbar';

const API_URL = process.env.REACT_APP_API_URL; // ✅ Backend URL from env

const StockCars = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    running: '',
    insurance: '',
    ownership: '',
    fuel: '',
    year: '',
    registration: '',
    price: '',
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    photo5: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(`${API_URL}/cars`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        Swal.fire({
          title: 'Success!',
          text: 'Car added successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setFormData({
          name: '',
          model: '',
          running: '',
          insurance: '',
          ownership: '',
          fuel: '',
          year: '',
          registration: '',
          price: '',
          photo1: null,
          photo2: null,
          photo3: null,
          photo4: null,
          photo5: null,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Error occurred while adding the car.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Car Details</h1>

        {/* Name and Model Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Name"
              value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input type="text" id="model" name="model" placeholder="Enter Model"
              value={formData.model} onChange={handleChange} required />
          </div>
        </div>

        {/* Running and Insurance Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="running">Running</label>
            <input type="text" id="running" name="running" placeholder="Enter Running"
              value={formData.running} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="insurance">Insurance</label>
            <input type="text" id="insurance" name="insurance" placeholder="Enter Insurance"
              value={formData.insurance} onChange={handleChange} required />
          </div>
        </div>

        {/* Ownership and Fuel Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ownership">Ownership</label>
            <input type="text" id="ownership" name="ownership" placeholder="Enter Ownership"
              value={formData.ownership} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fuel">Fuel Type</label>
            <input type="text" id="fuel" name="fuel" placeholder="Enter Fuel Type"
              value={formData.fuel} onChange={handleChange} required />
          </div>
        </div>

        {/* Year and Registration Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" placeholder="Enter Year"
              value={formData.year} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="registration">Registration Number</label>
            <input type="text" id="registration" name="registration" placeholder="Enter Registration Number"
              value={formData.registration} onChange={handleChange} required />
          </div>
        </div>

        {/* Price Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" placeholder="Enter Price"
              value={formData.price} onChange={handleChange} required />
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="photo1">Photo 1</label>
            <input type="file" id="photo1" name="photo1" onChange={handleFileChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="photo2">Photo 2</label>
            <input type="file" id="photo2" name="photo2" onChange={handleFileChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="photo3">Photo 3</label>
            <input type="file" id="photo3" name="photo3" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="photo4">Photo 4</label>
            <input type="file" id="photo4" name="photo4" onChange={handleFileChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="photo5">Photo 5</label>
            <input type="file" id="photo5" name="photo5" onChange={handleFileChange} />
          </div>
        </div>

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default StockCars;
