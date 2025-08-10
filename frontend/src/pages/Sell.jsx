import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import "./Sell.css";

const API_URL = process.env.REACT_APP_API_URL;

const Sell = () => {
  const [formData, setFormData] = useState({
    brand: "",
    modelAndVariant: "",
    manufacturingYear: "",
    owner: "",
    fuel: "", // ✅ Added fuel key
    kmsDriven: "",
    registrationNo: "",
    carInsurance: "",
    isAccidental: "",
    name: "",
    mobileNo: "",
    email: "",
  });

  const years = [];
  for (let i = 2006; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/car-data`, formData);
      console.log("Form submitted successfully:", response.data);

      Swal.fire({
        title: "Success!",
        text: "Your car details have been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form
      setFormData({
        brand: "",
        modelAndVariant: "",
        manufacturingYear: "",
        owner: "",
        fuel: "", // ✅ Reset fuel also
        kmsDriven: "",
        registrationNo: "",
        carInsurance: "",
        isAccidental: "",
        name: "",
        mobileNo: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error);

      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your details. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="sell-container">
        <h1>Sell Car</h1>
        <p>Please fill the details in the below form to send your request.</p>
        <form onSubmit={handleSubmit}>
         {/* Brand */}
<div className="form-group">
  <label>Brand</label>
  <select
    name="brand"
    value={formData.brand}
    onChange={handleChange}
    required
  >
    <option value="">Select Brand</option>
    <option value="Audi">Audi</option>
    <option value="BMW">BMW</option>
    <option value="Chevrolet">Chevrolet</option>
    <option value="Citroen">Citroen</option>
    <option value="Datsun">Datsun</option>
    <option value="Fiat">Fiat</option>
    <option value="Ford">Ford</option>
    <option value="Honda">Honda</option>
    <option value="Hyundai">Hyundai</option>
    <option value="Jaguar">Jaguar</option>
    <option value="Jeep">Jeep</option>
    <option value="Kia">Kia</option>
    <option value="Land Rover">Land Rover</option>
    <option value="Mahindra">Mahindra</option>
    <option value="Maruti Suzuki">Maruti Suzuki</option>
    <option value="Mercedes-Benz">Mercedes Benz</option>
    <option value="Morris Garage">Morris Garage</option>
    <option value="Skoda">Skoda</option>
    <option value="Nissan">Nissan</option>
    <option value="Renault">Renault</option>
    <option value="Tata">Tata</option>
    <option value="Toyota">Toyota</option>
    <option value="Volkswagen">Volkswagen</option>
  </select>
</div>


          {/* Model Name & Variant */}
          <div className="form-group">
            <label>Model Name & Variant</label>
            <input
              type="text"
              name="modelAndVariant"
              value={formData.modelAndVariant}
              onChange={handleChange}
              required
            />
          </div>

          {/* Manufacturing Year */}
          <div className="form-group">
            <label>Manufacturing Year</label>
            <select
              name="manufacturingYear"
              value={formData.manufacturingYear}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Ownership */}
          <div className="form-group">
            <label>Ownership</label>
            <select
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              required
            >
              <option value="">Select Ownership</option>
              <option value="First Owner">First Owner</option>
              <option value="Second Owner">Second Owner</option>
              <option value="Third Owner">Third Owner</option>
              <option value="Four or More">Four or More</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div className="form-group">
            <label>Fuel Type</label>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              required
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG</option>
              <option value="Hybrid">LPG</option>
              <option value="Electric">Electric</option>
              
            </select>
          </div>

         {/* Kms Driven */}
<div className="form-group">
  <label>Kms Driven</label>
  <select
    name="kmsDriven"
    value={formData.kmsDriven}
    onChange={handleChange}
    required
  >
    <option value="">Select Kms Driven</option>
    <option value="Upto 10,000 km">Upto 10,000 km</option>
    <option value="10,001 - 20,000 km">10,000 - 20,000 km</option>
    <option value="20,001 - 30,000 km">20,000 - 30,000 km</option>
    <option value="30,001 - 40,000 km">30,000 - 40,000 km</option>
    <option value="40,001 - 50,000 km">40,000 - 50,000 km</option>
    <option value="50,001 - 60,000 km">50,000 - 60,000 km</option>
    <option value="60,001 - 70,000 km">60,000 - 70,000 km</option>
    <option value="70,001 - 80,000 km">70,000 - 80,000 km</option>
    <option value="80,001 - 90,000 km">80,000 - 90,000 km</option>
    <option value="90,001 - 100,000 km">90,000 - 100,000 km</option>
    <option value="Above 100,000 km">Above 100,000 km</option>
  </select>
</div>

          {/* Registration No. */}
          <div className="form-group">
            <label>Registration No.</label>
            <input
              type="text"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Insurance */}
          <div className="form-group">
            <label>Insurance</label>
            <select
              name="carInsurance"
              value={formData.carInsurance}
              onChange={handleChange}
              required
            >
              <option value="">Select Car Insurance</option>
              <option value="Comprehensive">Comprehensive</option>
              <option value="Third Party">Third Party</option>
              <option value="No Insurance">No Insurance</option>
            </select>
          </div>

         {/* Any Major Accident? */}
<div className="form-group">
  <label>Any Major Accident?</label>
  <select
    name="isAccidental"
    value={formData.isAccidental}
    onChange={handleChange}
    required
  >
    <option value="">Select Option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>


          {/* Name */}
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile No. */}
          <div className="form-group">
            <label>Your Mobile No.</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
             <label>Your Email <small>(Optional)</small></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
               placeholder="Enter your email (optional)"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Sell;
