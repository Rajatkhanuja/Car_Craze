import React from "react";
import Navbar from "../components/Navbar";
import "./About.css"; // Make sure this CSS file exists
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>CAR CRAZE</strong>, a trusted name in the automotive industry since our establishment in 2004.
            With over two decades of experience, we have proudly emerged as seasoned experts in the sale and purchase of 
            non-accidental and non-odometer tempered cars.
          </p>
          <p>
            Our commitment to providing a seamless automotive experience led us to become a 
            <strong> one-stop solution</strong> for all your car-related needs.
          </p>
          <p>
            At CAR CRAZE, we understand that buying or selling a car involves more than a transaction – 
            it’s about <strong>trust, reliability, and satisfaction</strong>. Our dedicated team works tirelessly 
            to ensure that each customer receives the highest level of service, whether you are looking to finance your dream car, 
            secure the right insurance, or simply explore our extensive range of certified vehicles.
          </p>
          <p>
            What sets us apart is our emphasis on <strong>transparency and accountability</strong>. Every certified car 
            at CAR CRAZE comes with a detailed history, providing you with the confidence and peace of mind you deserve.
          </p>
          <p>
            We take pride in our longstanding partnerships with leading financial institutions including 
            IDFC, Bajaj Finance, Mahindra & Mahindra Finance, AU Small Finance, and IndusInd Bank – ensuring you have access 
            to a variety of financing options tailored to your needs.
          </p>
          <p>
            As an established player in the market, CAR CRAZE remains committed to delivering excellence in every aspect of 
            the automotive journey. Whether you are a buyer or a seller, our mission is to make your experience with us 
            <strong> memorable, reliable, and hassle-free</strong>.
          </p>
          <p><strong>Thank you</strong> for considering CAR CRAZE for all your automotive needs.</p>
        </div>
      </div>
    </>
  );
};

export default About;
