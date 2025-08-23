import React, { useState } from 'react';
import icicLogo from "../assets/icic.jpg";
import cwiLogo from "../assets/cwi.jpg";
const Warranty = () => {
    // State to manage which accordion section is open
    const [openSection, setOpenSection] = useState(null);

    // Function to toggle the accordion section
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section - Unchanged */}
                <div className="relative bg-blue-700 p-6 sm:p-8 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
                        Car Warranty & Protection Plan
                    </h1>
                    <p className="text-sm sm:text-base font-medium opacity-90 mt-2">
                        Driving with confidence, knowing you're protected.
                    </p>
                </div>

                {/* Main Content Sections */}
                <div className="p-4 sm:p-8">
                    {/* Powered by CWI Section with Dropdown */}
                    <div className="mb-8">
                        <h2
                            onClick={() => toggleSection('cwi')}
                            className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-800 bg-gray-100 p-4 sm:p-6 rounded-2xl transition-all hover:bg-gray-200 flex justify-between items-center"
                        >
                            <div className="text-left">
                                <div className="text-lg sm:text-xl font-bold text-gray-800">
                                    Powered by CWI
                                </div>
                                <div className="text-sm sm:text-base font-medium text-red-600 mt-1">
                                    Warranty plans starting from ₹2,499/-
                                </div>
                            </div>
                            <span className="text-xl transform transition-transform duration-300 ml-2">
                                {openSection === 'cwi' ? '▲' : '▼'}
                            </span>
                        </h2>
                        
                        {openSection === 'cwi' && (
                            <div className="p-4 sm:p-6 bg-gray-50 rounded-b-2xl border-x border-b border-gray-100">
                                {/* Warranty Header Card */}
                                <div className="bg-orange-100 rounded-2xl p-4 sm:p-6 mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-white rounded-lg p-2 mr-3">
  <img src={cwiLogo} alt="CWI Logo" className="h-8 w-auto" />
</div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800"> Car Craze Extended Warranty</h3>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600 mb-1">Claim Limit:</p>
                                            <p className="font-bold text-gray-800">No limit</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Tenure:</p>
                                            <p className="font-bold text-gray-800">6 months</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Distance limit:</p>
                                            <p className="font-bold text-gray-800">7,500 km</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Cool-off period:</p>
                                            <p className="font-bold text-gray-800">30 days</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Warranty Plan Inclusions */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Warranty plan inclusions</h3>
                                    
                                    {/* Engine Section */}
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800">Engine</h4>
                                        </div>
                                        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <p>• Oil pump</p>
                                            <p>• Crankshaft & pulley</p>
                                            <p>• Big end & main bearings</p>
                                            <p>• Connecting rods</p>
                                            <p>• Gudgeonpins</p>
                                            <p>• Piston and rings</p>
                                            <p>• Inlet and exhaust valves</p>
                                            <p>• Springs and guides</p>
                                            <p>• Engine block and cylinder head</p>
                                            <p>• Head gasket</p>
                                            <p>• Water pump</p>
                                            <p>• Camshaft</p>
                                            <p>• Rocker arms and shaft</p>
                                            <p>• Timing gears</p>
                                            <p>• Tensioner bearing</p>
                                            <p>• Inlet and exhaust manifold</p>
                                            <p>• Flywheel</p>
                                            <p>• Fuel pumps & injectors</p>
                                            <p>• Radiator</p>
                                            <p>• Elastic bolts</p>
                                        </div>
                                    </div>

                                    {/* Engine Management System */}
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800">Engine Management System</h4>
                                        </div>
                                        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <p>• Body Control Module</p>
                                            <p>• ABS/Speed Sensor</p>
                                            <p>• ECU/ECM</p>
                                            <p>• Throttle Position Sensor</p>
                                            <p>• Crank Angle Sensor</p>
                                            <p>• Water Temperature Sensor</p>
                                            <p>• Air mass flow Sensor</p>
                                            <p>• Idle speed control Sensor</p>
                                            <p>• Engine speed Sensor</p>
                                            <p>• Absolute pressure Sensor</p>
                                            <p>• Immobiliser</p>
                                        </div>
                                    </div>

                                    {/* Manual & Automatic Gearbox */}
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800">Manual & Automatic Gearbox</h4>
                                        </div>
                                        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <p>• Internal gears & adjoining shafts</p>
                                            <p>• Synchromesh hubs</p>
                                            <p>• Rings</p>
                                            <p>• Selectors</p>
                                            <p>• Bearings</p>
                                            <p>• Gearbox housing</p>
                                            <p>• Transmission fluid pump</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <a 
                                        href="/contact" 
                                        className="inline-block py-3 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
                                    >
                                        Get Your Warranty Plan - Starting ₹2,499/-
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Powered by ICICI Lombard Section with Dropdown */}
                    <div className="mb-8">
                        <h2
                            onClick={() => toggleSection('icici')}
                            className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-800 bg-gray-100 p-4 sm:p-6 rounded-2xl transition-all hover:bg-gray-200 flex justify-between items-center"
                        >
                            <div className="text-left">
                                <div className="text-lg sm:text-xl font-bold text-gray-800">
                                    Powered by ICICI Lombard
                                </div>
                                <div className="text-sm sm:text-base font-medium text-red-600 mt-1">
                                    Warranty plans starting from ₹5,000/-
                                </div>
                            </div>
                            <span className="text-xl transform transition-transform duration-300 ml-2">
                                {openSection === 'icici' ? '▲' : '▼'}
                            </span>
                        </h2>
                        
                        {openSection === 'icici' && (
                            <div className="p-4 sm:p-6 bg-gray-50 rounded-b-2xl border-x border-b border-gray-100">
                                {/* Warranty Header Card */}
                                <div className="bg-orange-100 rounded-2xl p-4 sm:p-6 mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-white rounded-lg p-2 mr-3">
  <img src={icicLogo} alt="ICIC Logo" className="h-8 w-auto" />
</div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800"> Car Craze Extended Warranty</h3>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600 mb-1">Claim Limit:</p>
                                            <p className="font-bold text-gray-800">₹2,00,000</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Tenure:</p>
                                            <p className="font-bold text-gray-800">1 year</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Distance limit:</p>
                                            <p className="font-bold text-gray-800">20,000 km</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 mb-1">Cool-off period:</p>
                                            <p className="font-bold text-gray-800">30 days</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Warranty Plan Inclusions */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Warranty plan inclusions</h3>
                                    
                                    {/* Transmission (Manual) */}
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800">Transmission (Manual)</h4>
                                        </div>
                                        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <p>• Shafts</p>
                                            <p>• Gears</p>
                                            <p>• Synchromesh Hubs & Rings</p>
                                            <p>• Selectors</p>
                                            <p>• Transfer Gears</p>
                                            <p>• Gear Shifter Assembly</p>
                                        </div>
                                    </div>

                                    {/* Transmission (Automatic) */}
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800">Transmission (Automatic)</h4>
                                        </div>
                                        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <p>• Shafts</p>
                                            <p>• Gear</p>
                                            <p>• Oil pump</p>
                                            <p>• Valve</p>
                                            <p>• Drive plate</p>
                                            <p>• Transfer gear</p>
                                            <p>• Transmission gear</p>
                                        </div>
                                    </div>

                                    {/* Engine & Peripherals */}
                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-800">Engine & Peripherals</h4>
                                        </div>
                                        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <p>• Oil Pump</p>
                                            <p>• Crankshaft & Pulley</p>
                                            <p>• Connecting Rods & Bearings</p>
                                            <p>• Big end and main bearing</p>
                                            <p>• Inlet and exhaust valves</p>
                                            <p>• Cylinder block and cylinder head</p>
                                            <p>• Gudgeon pins</p>
                                            <p>• Camshaft and bearings</p>
                                            <p>• Pistons & Rings</p>
                                            <p>• Springs and guides</p>
                                            <p>• Rocker arm and shaft</p>
                                            <p>• Camgear</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <a 
                                        href="/contact" 
                                        className="inline-block py-3 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
                                    >
                                        Get Your Warranty Plan - Starting ₹5,000/-
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center p-4 sm:p-8 text-gray-500 text-sm border-t border-gray-200">
                    <p>&copy; {new Date().getFullYear()} Car Craze. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Warranty;