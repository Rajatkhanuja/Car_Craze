import React from 'react';

const RTOWork = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section with Background Image */}
                <div className="relative bg-gradient-to-r from-cyan-800 to-cyan-900 text-white overflow-hidden">
                    <div 
                        className="w-full h-64 sm:h-80 bg-cover bg-center bg-cyan-700"
                        style={{
                            backgroundImage: `linear-gradient(rgba(6,182,212,0.8), rgba(8,145,178,0.8)), url('https://tse3.mm.bing.net/th/id/OIP.jjt-kUDljvOQcXNvYOp3LAAAAA?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3')`,
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 text-center">
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
                                RTO Work &<br />Documentation
                            </h1>
                            <p className="text-sm sm:text-lg font-medium opacity-90">
                                Seamless Paperwork, Stress-Free Ownership
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    {/* Services Sections - 5 Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* New Vehicle Registration */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-bold text-cyan-700 mb-3">
                                New Vehicle Registration
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Complete paperwork for your new car.
                            </p>
                        </div>

                        {/* Registration Renewal */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-bold text-cyan-700 mb-3">
                                Registration Renewal
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Timely renewal of your vehicle's Registration certificate (RC).
                            </p>
                        </div>

                        {/* Change of Ownership */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-bold text-cyan-700 mb-3">
                                Change of Ownership
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Seamless transfer of ownership and RC details.
                            </p>
                        </div>

                        {/* Duplicate Documents */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-bold text-cyan-700 mb-3">
                                Duplicate Documents
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Help with lost or damaged RC.
                            </p>
                        </div>

                        {/* NOC Certificate */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl font-bold text-cyan-700 mb-3">
                                NOC <br/> (No Objection Certificate)
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Obtaining NOC for inter-state vehicle transfer.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <a 
                            href="/contact" 
                            className="inline-block py-3 px-8 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
                        >
                            Get Started with Your Paperwork
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

export default RTOWork;