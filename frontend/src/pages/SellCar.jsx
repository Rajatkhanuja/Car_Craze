import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import
import Navbar from "../components/Navbar";
import carImage from "../assets/rto.jpg";
import "./SellCar.css";

const SellCar = () => {
  const navigate = useNavigate(); // ✅ Hook

  const handleSellClick = () => {
    navigate("/sell"); // ✅ Redirect to Sell Form page
  };

  return (
    <>
      <Navbar />
      <div className="sell-car-container">
        <div className="sell-car-content">
          <img src={carImage} alt="Car" className="car-image" />
          <div className="sell-car-text">
            <h1>Sell Your Car</h1>
            <p>
              Selling your used car on Car Craze is now easier than ever! We help you sell your car at the best possible price.
            </p>
            <p>
              Our experienced team evaluates your car and gets you the right value with complete transparency and no hidden charges.
            </p>
            <p>
              Just provide your car details with one click and get instant cash!
            </p>
           <p>
  Choose <span className="brand-name">Car Craze</span> for fast, easy, and trustworthy service.
</p>
           <button className="sell-button" onClick={handleSellClick}>
              Sell Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellCar;
