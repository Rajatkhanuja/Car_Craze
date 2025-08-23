import React from 'react';

const Predelivery = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section with Hero Image */}
                <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
                    <div 
                        className="w-full h-64 sm:h-80 bg-cover bg-center bg-gray-700"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://wp-website.safetyculture.com/wp-content/uploads/sites/3/2023/09/pre-delivery-inspection-pdi-checklist-featured.png')`,
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-8">
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
                                Buy safe with our pre-delivery<br />inspections
                            </h1>
                            <p className="text-sm sm:text-lg font-medium opacity-90">
                                Buy a car from anywhere, we'll inspect it for you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="p-4 sm:p-6 lg:p-8">
                    {/* Statistics Section */}
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                            75% of our pre-delivery inspections reveal issues
                        </h2>
                        
                        <div className="grid gap-4 sm:gap-6">
                            {/* Engine Defects */}
                            <div className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div 
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-cover bg-center mr-4 sm:mr-6 bg-blue-100"
                                    style={{
                                        backgroundImage: `url('https://tse3.mm.bing.net/th/id/OIP.dUMCOulT8V24e3mL_sa-kwHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3')`
                                    }}
                                ></div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                                        Engine defects
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        <span className="font-semibold text-gray-800">20%</span> cars inspected by CARS24 have engine defects
                                    </p>
                                </div>
                            </div>

                            {/* Manufacturing Errors */}
                            <div className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div 
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-cover bg-center mr-4 sm:mr-6 bg-purple-100"
                                    style={{
                                        backgroundImage: `url('https://autoworksmn.com/wp-content/uploads/2023/05/car-dashboard-car-ignition-system-checking-and-errors-1080x675-1.jpg')`
                                    }}
                                ></div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                                        Manufacturing errors
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        <span className="font-semibold text-gray-800">27%</span> of brand new cars have manufacturing errors
                                    </p>
                                </div>
                            </div>

                            {/* Hidden Accidental History */}
                            <div className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div 
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-cover bg-center mr-4 sm:mr-6 bg-red-100"
                                    style={{
                                        backgroundImage: `url('https://thevehiclecare.com/wp-content/uploads/2024/09/AdobeStock_650988463-1024x683-1.jpeg')`
                                    }}
                                ></div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                                        Hidden accidental history
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        <span className="font-semibold text-gray-800">30%</span> used cars have hidden accidental history
                                    </p>
                                </div>
                            </div>

                            {/* Water Damages */}
                            <div className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div 
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-cover bg-center mr-4 sm:mr-6 bg-cyan-100"
                                    style={{
                                        backgroundImage: `url('https://autosalonleschi.com/wp-content/uploads/photo-gallery/m1.jpg')`
                                    }}
                                ></div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                                        Water damages
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        <span className="font-semibold text-gray-800">1 lakh+</span> cars have rust, electrical damages due to rains every year
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-8 p-4 sm:p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                            Buy a Car from anywhere, We'll inspect it for you. Brand New Car, Used Car
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Below is a summary of the key areas we check during our PDI process.
                        </p>
                    </div>

                    <hr className="my-6 sm:my-8 border-gray-200" />

                    {/* PDI Checklist Sections */}
                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                        {/* Exterior Inspection */}
                        <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                1. Exterior Check
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                                <li>Paint and bodywork for any scratches or dents.</li>
                                <li>Glass, mirrors, and lights for damage and functionality.</li>
                                <li>Wheel rims and tire pressure.</li>
                                <li>All exterior lighting and indicators are working.</li>
                                <li>Fuel cap, trunk, and hood alignment.</li>
                            </ul>
                        </div>

                        {/* Interior Inspection */}
                        <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                2. Interior Check
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                                <li>Upholstery and trim for any imperfections.</li>
                                <li>Dashboard instruments and infotainment system.</li>
                                <li>Seat belts, airbags, and safety features.</li>
                                <li>Heating, ventilation, and air conditioning (HVAC) system.</li>
                                <li>All windows and locks operate smoothly.</li>
                            </ul>
                        </div>

                        {/* Mechanical Inspection */}
                        <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                3. Mechanical & Under-Hood
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                                <li>Engine oil, brake fluid, and coolant levels.</li>
                                <li>Brakes and suspension system performance.</li>
                                <li>Battery health and charging system.</li>
                                <li>No abnormal sounds from the engine or exhaust.</li>
                                <li>Fluid leaks are checked and rectified.</li>
                            </ul>
                        </div>

                        {/* Final Check */}
                        <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                4. Final Verification
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                                <li>Vehicle documents and manuals are present.</li>
                                <li>All keys and remotes are functional.</li>
                                <li>Road test to verify driving performance.</li>
                                <li>Final clean and polish of the vehicle.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8 sm:mt-10">
                        <a 
                            href="/contact" 
                            className="inline-block py-3 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
                        >
                            Schedule Your PDI
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center p-4 sm:p-6 lg:p-8 text-gray-500 text-xs sm:text-sm border-t border-gray-200 mt-6 sm:mt-8">
                    <p>&copy; {new Date().getFullYear()} Car Craze. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Predelivery;