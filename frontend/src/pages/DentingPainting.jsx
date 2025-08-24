import React from 'react';

const DentingPainting = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section with Hero Background Image */}
                <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
                    <div 
                        className="w-full h-64 sm:h-80 bg-cover bg-center bg-gray-700"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.dentingpainting.com/wp-content/uploads/2022/08/Boost-Car-Value-Copy-Copy-2.jpg')`,
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 text-center">
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
                                Car Craze Denting & Painting
                            </h1>
                            <p className="text-sm sm:text-lg font-medium opacity-90">
                                Quality Service, Perfect Finish
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    
                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        
                        {/* Denting Services Box */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://tse3.mm.bing.net/th/id/OIP.oDILhPQ5R20hNjPlU_x2-AHaD3?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3')"}}>
                                <div className="h-full  bg-opacity-40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    Denting Services
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Professional dent repair services with expert technicians. We restore your car's body to perfect condition.
                                </p>
                            </div>
                        </div>

                        {/* Painting Services Box */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5c9bc62fc2ff6145565a8b0d/1564163165791-1VM7OF76ZC4V2AW45MMY/advantages-of-ceramic-coating-on-car.jpg')"}}>
                                <div className="h-full  bg-opacity-40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    Painting Services
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    High-quality painting services with premium paints and professional finish guarantee for showroom quality results.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Button */}
                    <div className="text-center mt-10">
                        <a 
                            href="/contact" 
                            className="inline-block py-4 px-10 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
                        >
                            Contact Us
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

export default DentingPainting;