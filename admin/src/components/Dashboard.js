import React from "react";
import Navbar from "./Navbar";
import "./Dashboard.css"; // Import the CSS file

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-welcome">
          <h1>Welcome to Car Craze Admin Panel</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
