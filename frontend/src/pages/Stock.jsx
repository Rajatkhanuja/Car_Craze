import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Stock.css";

const API_URL = process.env.REACT_APP_API_URL; // ✅ Backend URL from env

// CustomSelect Component
const CustomSelect = ({ label, options, value, onChange, placeholder, styleClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

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
        onChange({ target: { value: optionValue } });
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

    const manufacturers = ["Audi", "BMW", "Chevrolet", "Citroen", "Datsun", "Fiat", "Ford", "Honda",
"Hyundai", "Jaguar", "Jeep", "Kia", "Land Rover", "Mahindra", "Maruti Suzuki",
"Mercedes-Benz", "Morris Garage", "Nissan", "Renault", "Skoda", "Tata",
"Toyota", "Volkswagen"

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
                // ✅ Cache-bypass added here
                const response = await axios.get(`${API_URL}/cars?nocache=${Date.now()}`);
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
        setSelectedManufacturer(event.target.value);
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
                        styleClass="budget-select-custom"
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
                        styleClass="manufacturer-select-custom"
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

                <div className="stock-cars-grid">
                    {filteredCars.map((car, index) => (
                        <div key={index} className="stock-car-card">
                            <img
                                src={car.photo1} // ✅ Direct Cloudinary URL
                                alt={car.name}
                                className="stock-car-img"
                                onError={(e) => {
                                    e.target.src = '/placeholder-car.jpg';
                                }}
                            />
                            <div className="stock-car-info">
                                <h3 className="stock-car-name">{car.name} - {car.model}</h3>
                                <div className="car-details-row">
                                    <p><strong>Reg.Year:</strong> {car.year}</p>
                                    <p><strong>Fuel:</strong> {car.fule}</p>
                                </div>
                                <div className="car-details-row">
                                    <p><strong>Km Driven:</strong> {car.running}</p>
                                    <p><strong>Price:</strong> {formatPrice(car.price)}</p>
                                </div>
                                <button className="stock-view-details" onClick={() => handleViewDetails(car._id)}>
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
