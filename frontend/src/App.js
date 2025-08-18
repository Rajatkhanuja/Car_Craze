import React from 'react';
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
import Insurance from './pages/Insurance';
import Roadside from './pages/Roadside';
import Warranty from './pages/Warranty';
import Predelivery from './pages/Predelivery';
// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Custom Hook
import useVersionChecker from './hooks/useVersionChecker'; // ✅ Add this

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

  useVersionChecker(); // ✅ Auto-refresh on version update

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
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/rodeside" element={<Roadside />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/Predelivery" element={<Predelivery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
