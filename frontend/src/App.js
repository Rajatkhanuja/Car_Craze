import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import the Home component
import Home from './pages/Home';
import Sell from './pages/Sell';
import Services from './pages/Services';
import Stock from './pages/Stock';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // Import Navbar
import CarDetails from './pages/CarDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure to import the JS for interactivity


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Move Navbar here so it renders on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
        </Routes>
      </BrowserRouter>    
    </>
  );
};

export default App;
