import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Sell from './pages/Sell';
import Stock from './pages/Stock';
import Contact from './pages/Contact';
import CarDetails from './pages/CarDetails';
import About from './pages/About';
import BuyUsedCar from './pages/BuyUsedCar';
import UsedCarLoan from './pages/UsedCarLoan';
import SellCar from './pages/SellCar';
import ParkAndSell from './pages/ParkAndSell';

// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import ScrollToTop

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

  // ✅ Auto Refresh after 1 hour
  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      window.location.reload();
    }, 3600000); // 1 hour = 3600000 milliseconds

    return () => clearTimeout(refreshTimer); // Clean up on unmount
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/buy-used-car" element={<BuyUsedCar />} />
          <Route path="/used-car-loan" element={<UsedCarLoan />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/park-and-sell" element={<ParkAndSell />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
