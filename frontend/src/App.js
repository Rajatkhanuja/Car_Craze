import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Sell from './pages/Sell';
import Services from './pages/Services';
import Stock from './pages/Stock';
import Contact from './pages/Contact';
import CarDetails from './pages/CarDetails';
import About from './pages/About'; // ✅ About Us page

// Components
import Navbar from './components/Navbar';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* ✅ About Us route */}
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
