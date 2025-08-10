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
    manufacturingYear: "",   // ✅ Updated key
    owner: "",
    kmsDriven: "",
    registrationNo: "",
    carInsurance: "",
    isAccidental: "",
    name: "",
    mobileNo: "",
    email: "",
  });

  const years = [];
  for (let i = 2009; i <= new Date().getFullYear(); i++) {
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
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
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

          {/* Kms Driven */}
          <div className="form-group">
            <label>Kms Driven</label>
            <input
              type="number"
              name="kmsDriven"
              value={formData.kmsDriven}
              onChange={handleChange}
              required
            />
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
            <div>
              <label>
                <input
                  type="radio"
                  name="isAccidental"
                  value="Yes"
                  checked={formData.isAccidental === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAccidental"
                  value="No"
                  checked={formData.isAccidental === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
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
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Sell;
