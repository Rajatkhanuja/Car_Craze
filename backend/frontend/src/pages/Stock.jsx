import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Stock.css";

// CustomSelect Component
const CustomSelect = ({ label, options, value, onChange, placeholder, styleClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionClick = (optionValue) => {
        onChange({ target: { value: optionValue } }); // Mimic select's event object
        setIsOpen(false);
    };

    const displayValue = options.find(opt => opt.value === value)?.label || placeholder;

    return (
        <div className={`custom-select-container ${styleClass}`} ref={selectRef}>
            <div className="selected-value" onClick={() => setIsOpen(!isOpen)}>
                {displayValue}
                <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="options-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`option-item ${option.value === value ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


const Stock = () => {
    const [selectedBudget, setSelectedBudget] = useState("");
    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    const manufacturers = [
        "Audi", "BMW", "Ford", "Honda", "Hyundai", "Jaguar", "Kia",
        "Mahindra", "Maruti Suzuki", "Mercedes-Benz", "Skoda", "Tata",
        "Toyota", "Volkswagen", "Morris Garage",
    ];

    const manufacturerOptions = [{ label: "Select Manufacturer", value: "" }, ...manufacturers.map(m => ({ label: m, value: m }))];

    const budgetOptions = [
        { label: "Select Budget", value: "" },
        { label: "₹1,00,000 - ₹2,00,000", value: "1-2" },
        { label: "₹2,00,000 - ₹4,00,000", value: "2-4" },
        { label: "₹4,00,000 - ₹6,00,000", value: "4-6" },
        { label: "₹6,00,000 - ₹8,00,000", value: "6-8" },
        { label: "₹8,00,000 - ₹10,00,000", value: "8-10" },
        { label: "Above ₹10,00,000", value: "above-10" },
    ];

    const budgetRanges = {
        "1-2": { min: 100000, max: 200000 },
        "2-4": { min: 200000, max: 400000 },
        "4-6": { min: 400000, max: 600000 },
        "6-8": { min: 600000, max: 800000 },
        "8-10": { min: 800000, max: 1000000 },
        "above-10": { min: 1000000, max: Infinity },
    };

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cars');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    const handleBudgetChange = (event) => {
        setSelectedBudget(event.target.value);
    };

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setSelectedManufacturer(value);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(price);
    };

    const filteredCars = cars.filter(car => {
        const matchesManufacturer = !selectedManufacturer ||
            car.name.toLowerCase().includes(selectedManufacturer.toLowerCase());

        let matchesBudget = true;
        if (selectedBudget) {
            const range = budgetRanges[selectedBudget];
            matchesBudget = car.price >= range.min && car.price <= range.max;
        }

        return matchesManufacturer && matchesBudget;
    });

    const handleViewDetails = (id) => {
        navigate(`/car-details/${id}`);
    };

    return (
        <div className="main-container">
            <aside className="sidebar">
                <h2>Budget Range</h2>
                <div className="select-wrapper">
                    <CustomSelect
                        options={budgetOptions}
                        value={selectedBudget}
                        onChange={handleBudgetChange}
                        placeholder="Select Budget"
                        styleClass="budget-select-custom" // Add a class for specific styling if needed
                    />
                </div>
               <button
    className="clear-filter"
    onClick={() => setSelectedBudget("")}
    style={{
        marginLeft: '10px',
        padding: '5px 10px',
        display: selectedBudget ? 'inline-block' : 'none'
    }}
>
    Clear Budget
</button>

                <h2>Manufacturer</h2>
                <div className="select-wrapper">
                    <CustomSelect
                        options={manufacturerOptions}
                        value={selectedManufacturer}
                        onChange={handleManufacturerChange}
                        placeholder="Select Manufacturer"
                        styleClass="manufacturer-select-custom" // Add a class for specific styling if needed
                    />
                    <button
                        className="clear-filter"
                        onClick={() => setSelectedManufacturer("")}
                        style={{
                            marginLeft: '10px',
                            padding: '5px 10px',
                            display: selectedManufacturer ? 'inline-block' : 'none'
                        }}
                    >
                        Clear
                    </button>
                </div>
            </aside>

            <div className="content">
                <div className="stock-header">
                    <h1>Stock Cars</h1>
                </div>

                <div className="stock-cars-grid"> {/* Renamed cars-grid to stock-cars-grid for consistency with CSS */}
                    {filteredCars.map((car, index) => (
                        <div key={index} className="stock-car-card"> {/* Renamed car-card to stock-car-card */}
                            <img
                                src={`http://localhost:5000/${car.photo1}`}
                                alt={car.name}
                                className="stock-car-img" // Renamed car-img to stock-car-img
                                onError={(e) => {
                                    e.target.src = '/placeholder-car.jpg';
                                }}
                            />
                            <div className="stock-car-info"> {/* Renamed car-info to stock-car-info */}
                                <h3 className="stock-car-name">{car.name} - {car.model}</h3> {/* Renamed car-name to stock-car-name */}
                                <div className="car-details-row">
                                    <p><strong>Year:</strong> {car.year}</p>
                                    <p><strong>Running:</strong> {car.running}</p>
                                </div>
                                <div className="car-details-row">
                                    <p><strong>Fuel:</strong> {car.fuel}</p>
                                    <p><strong>Price:</strong> {formatPrice(car.price)}</p>
                                </div>
                                <button className="stock-view-details" onClick={() => handleViewDetails(car._id)}> {/* Renamed view-details to stock-view-details */}
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCars.length === 0 && (
                    <p className="no-cars">No cars found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default Stock;