import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import "./Sell.css";

const Sell = () => {
  const [formData, setFormData] = useState({
    car: "",
    model: "",
    monthAndYear: "",
    owner: "",
    colour: "",
    registrationNo: "",
    registrationAt: "",
    lifeTimeTax: "",
    carInsurance: "",
    isAccidental: "",
    name: "",
    mobileNo: "",
    email: "",
    month: "",
    year: "",
  });

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const years = [];
  for (let i = 2009; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }

  const carColors = [
    "Black", "White", "Silver", "Grey", "Red", "Blue", "Green", "Yellow", 
    "Orange", "Brown", "Beige", "Purple", "Pink", "Gold", "Maroon", "Teal", 
    "Bronze", "Turquoise", "Turquoise Blue", "Champagne", "Metallic Blue"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Concatenate month and year
    const monthAndYear = `${formData.month} ${formData.year}`;
    const updatedFormData = { ...formData, monthAndYear };

    try {
      const response = await axios.post("http://localhost:5000/api/car-data", updatedFormData);
      console.log("Form submitted successfully:", response.data);

      // Success pop-up using SweetAlert2
      Swal.fire({
        title: 'Success!',
        text: 'Your car details have been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      setFormData({}); // Reset form
    } catch (error) {
      console.error("Error submitting form data:", error);

      // Error pop-up using SweetAlert2
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting your details. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
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
          <div className="form-group">
            <label>Car Name</label>
            <input
              type="text"
              name="car"
              value={formData.car}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>

          {/* Month and Year dropdowns */}
          <div className="form-group">
            <label>Month</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="">Select Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Year</label>
            <select
              name="year"
              value={formData.year}
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

          {/* Owner dropdown */}
          <div className="form-group">
            <label>Owner</label>
            <select
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              required
            >
              <option value="">Select Owner</option>
              <option value="First Owner">First Owner</option>
              <option value="Second Owner">Second Owner</option>
              <option value="Third Owner">Third Owner</option>
              <option value="Four or More">Four or More</option>
            </select>
          </div>

          {/* Colour dropdown */}
          <div className="form-group">
            <label>Colour</label>
            <select
              name="colour"
              value={formData.colour}
              onChange={handleChange}
              required
            >
              <option value="">Select Colour</option>
              {carColors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Registration Number</label>
            <input
              type="text"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Registration At</label>
            <input
              type="text"
              name="registrationAt"
              value={formData.registrationAt}
              onChange={handleChange}
              required
            />
          </div>

          {/* Lifetime Tax options */}
          <div className="form-group">
            <label>Lifetime Tax</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="lifeTimeTax"
                  value="Individual"
                  checked={formData.lifeTimeTax === "Individual"}
                  onChange={handleChange}
                />
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  name="lifeTimeTax"
                  value="Corporate"
                  checked={formData.lifeTimeTax === "Corporate"}
                  onChange={handleChange}
                />
                Corporate
              </label>
            </div>
          </div>

          {/* Car Insurance dropdown */}
          <div className="form-group">
            <label>Car Insurance</label>
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

          {/* Accidental options */}
          <div className="form-group">
            <label>Accidental?</label>
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

          {/* Name, Mobile, and Email fields */}
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
          <div className="form-group">
            <label>Your Mobile Number</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
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
