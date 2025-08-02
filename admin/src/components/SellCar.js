import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import './SellCar.css';

const API_URL = process.env.REACT_APP_API_URL; // ✅ Backend URL from env

const DeleteButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="delete-button group flex items-center justify-center gap-2 
                 min-w-[100px] py-2 px-4
                 bg-red-500 hover:bg-red-600 
                 rounded-lg shadow-sm hover:shadow-md
                 transition-all duration-200 ease-in-out"
    >
      <svg 
        className="w-4 h-4 text-white transition-transform group-hover:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
        />
      </svg>
      <span className="text-white font-medium text-sm md:text-base">Delete</span>
    </button>
  );
};

const SellCar = () => {
  const [carDataList, setCarDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch car data
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/api/car-data`);
        setCarDataList(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setError("Failed to fetch car data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarData();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This car data will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/api/car-data/${id}`);
        setCarDataList(carDataList.filter((car) => car._id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "The car data has been deleted.",
          icon: "success"
        });
      } catch (error) {
        console.error("Error deleting car data:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error deleting the car data. Please try again.",
          icon: "error"
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading-spinner">Loading car data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="sell-car-container">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Sell Data Info</h1>
      {carDataList.length === 0 ? (
        <div className="flex justify-center items-center p-8">
          <p className="text-gray-500 text-lg">No car data available.</p>
        </div>
      ) : (
        <div className="table-responsive bg-white rounded-lg shadow-sm">
          <table>
            <thead>
              <tr>
                {["Car", "Model", "Owner", "Registration No", "Month/Year", 
                  "Color", "Registration At", "Life Time Tax", 
                  "Car Insurance", "Accident", "Name", "Mobile No", 
                  "Email", "Actions"].map(header => (
                  <th key={header} className="px-4 py-3 bg-gray-50 text-gray-700">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {carDataList.map((car) => (
                <tr key={car._id} className="hover:bg-gray-50 transition-colors duration-150">
                  {Object.entries({
                    car: car.car,
                    model: car.model,
                    owner: car.owner,
                    registrationNo: car.registrationNo,
                    monthAndYear: car.monthAndYear,
                    colour: car.colour,
                    registrationAt: car.registrationAt,
                    lifeTimeTax: car.lifeTimeTax,
                    carInsurance: car.carInsurance,
                    isAccidental: car.isAccidental ? "Yes" : "No",
                    name: car.name,
                    mobileNo: car.mobileNo,
                    email: car.email
                  }).map(([key, value]) => (
                    <td key={key} data-label={key} className="px-4 py-3 border-b">
                      {value}
                    </td>
                  ))}
                  <td data-label="Actions" className="px-4 py-3 border-b">
                    <DeleteButton onClick={() => handleDelete(car._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SellCar;
