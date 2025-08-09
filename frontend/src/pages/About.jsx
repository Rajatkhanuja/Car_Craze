import React from "react";
import Navbar from "../components/Navbar";
import "./About.css"; // Make sure this is updated
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1 className="main-title">About <span>CAR CRAZE</span></h1>

          <section>
            <h2>Our Legacy</h2>
            <p>
              Established in 2004, <strong>CAR CRAZE</strong> has become a trusted name in the automotive industry. 
              With over two decades of expertise, we specialize in the sale and purchase of 
              <strong> non-accidental</strong> and <strong>non-odometer tempered cars</strong>.
            </p>
          </section>

          <section>
            <h2>Why Choose Us?</h2>
            <p>
              Our aim is to provide a <strong>one-stop solution</strong> for all your car-related needs — from buying 
              and selling, to insurance and financing. We don’t just sell cars, we build relationships based on 
              <strong> trust, satisfaction, and transparency</strong>.
            </p>
          </section>

          <section>
            <h2>What We Offer</h2>
            <ul>
              <li>Certified pre-owned cars with full history</li>
              <li>Finance options from IDFC, Bajaj Finance, AU Bank, and more</li>
              <li>Trusted insurance assistance</li>
              <li>Expert support and guidance</li>
            </ul>
          </section>

          <section>
            <h2>Our Promise</h2>
            <p>
              Every car at CAR CRAZE comes with a <strong>detailed background check</strong>, ensuring peace of mind 
              for our buyers. We partner only with reputed institutions, offering you tailored solutions for your needs.
            </p>
          </section>

          <section>
            <h2>Thank You</h2>
            <p>
              We appreciate your trust in <strong>CAR CRAZE</strong>. Whether buying or selling, we’re here to make your 
              automotive journey <strong>memorable, reliable, and hassle-free</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
