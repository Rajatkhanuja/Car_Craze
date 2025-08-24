import React from 'react';

const DrycleanPolish = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section with Hero Background Image */}
                <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
                    <div 
                        className="w-full h-64 sm:h-80 bg-cover bg-center bg-gray-700"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://fourwheeltrends.com/wp-content/uploads/2024/04/diy-car-interior-cleaning-tips.jpg')`,
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 text-center">
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
                                Dry Cleaning & Polishing
                            </h1>
                            <p className="text-sm sm:text-lg font-medium opacity-90">
                                Revitalize your car's look, inside and out.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    
                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        
                        {/* Dry Cleaning Services Box */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.TxnYQnemwTy3bsLRW_8DLgAAAA?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3')"}}>
                                <div className="h-full  bg-opacity-40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    Dry Cleaning Services
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Professional interior dry cleaning services to make your car's cabin fresh and spotless. We deep clean seats, carpets, and dashboard with advanced techniques.
                                </p>
                            </div>
                        </div>

                        {/* Polishing Services Box */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://th.bing.com/th/id/R.1ed75fbef8fe26f47a9c95fb0694fcb4?rik=T3zpsYS3IuuxDQ&riu=http%3a%2f%2fwww.ramoozcarcaredubai.com%2fimg%2fpo3.jpg&ehk=zfmpLgPjxF740GvIVfLdTLHruUk2I65heBs7ids1iDs%3d&risl=&pid=ImgRaw&r=0')"}}>
                                <div className="h-full  bg-opacity-40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    Polishing Services
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Expert exterior polishing and waxing services for mirror-like shine. We restore your car's paint and protect it with premium quality products.
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
                            Schedule a Service
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

export default DrycleanPolish;