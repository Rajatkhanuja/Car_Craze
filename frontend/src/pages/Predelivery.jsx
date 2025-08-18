import React from 'react';

const Predelivery = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section */}
                <div className="relative bg-teal-700 p-6 sm:p-8 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
                        Pre-Delivery Inspection (PDI)
                    </h1>
                    <p className="text-sm sm:text-base font-medium opacity-90 mt-2">
                        Ensuring every detail is perfect before you drive away.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our comprehensive Pre-Delivery Inspection is a meticulous multi-point checklist that guarantees your new vehicle meets our highest standards of quality and safety. Our certified technicians carefully examine every aspect of your car to ensure it is in pristine condition for your first drive.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Below is a summary of the key areas we check during our PDI process.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* PDI Checklist Sections */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Exterior Inspection */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                1. Exterior Check
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Paint and bodywork for any scratches or dents.</li>
                                <li>Glass, mirrors, and lights for damage and functionality.</li>
                                <li>Wheel rims and tire pressure.</li>
                                <li>All exterior lighting and indicators are working.</li>
                                <li>Fuel cap, trunk, and hood alignment.</li>
                            </ul>
                        </div>

                        {/* Interior Inspection */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                2. Interior Check
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Upholstery and trim for any imperfections.</li>
                                <li>Dashboard instruments and infotainment system.</li>
                                <li>Seat belts, airbags, and safety features.</li>
                                <li>Heating, ventilation, and air conditioning (HVAC) system.</li>
                                <li>All windows and locks operate smoothly.</li>
                            </ul>
                        </div>

                        {/* Mechanical Inspection */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                3. Mechanical & Under-Hood
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Engine oil, brake fluid, and coolant levels.</li>
                                <li>Brakes and suspension system performance.</li>
                                <li>Battery health and charging system.</li>
                                <li>No abnormal sounds from the engine or exhaust.</li>
                                <li>Fluid leaks are checked and rectified.</li>
                            </ul>
                        </div>

                        {/* Final Check */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                4. Final Verification
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Vehicle documents and manuals are present.</li>
                                <li>All keys and remotes are functional.</li>
                                <li>Road test to verify driving performance.</li>
                                <li>Final clean and polish of the vehicle.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="text-center mt-10">
                        <a 
                            href="/contact" 
                            className="inline-block py-3 px-8 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg"
                        >
                            Schedule Your Test Drive
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center p-6 sm:p-8 text-gray-500 text-sm border-t border-gray-200 mt-8">
                    <p>&copy; {new Date().getFullYear()} Car Craze. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Predelivery;
