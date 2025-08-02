import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import StockCars from "./components/StockCars";
import SellCar from "./components/SellCar";
import UpdateService from "./components/UpdateService";
import ContactInfo from "./components/ContactInfo";
import EditCar from "./components/EditCar"; // Import the EditCar component
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stock-cars"
          element={
            <ProtectedRoute>
              <StockCars />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-car"
          element={
            <ProtectedRoute>
              <SellCar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-service"
          element={
            <ProtectedRoute>
              <UpdateService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact-info"
          element={
            <ProtectedRoute>
              <ContactInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-car/:id" // Add a specific route for EditCar
          element={
            <ProtectedRoute>
              <EditCar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
