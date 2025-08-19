import React from 'react';

const DrycleanPolish = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section */}
                <div className="relative bg-purple-700 p-6 sm:p-8 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
                        Dry Cleaning & Polishing
                    </h1>
                    <p className="text-sm sm:text-base font-medium opacity-90 mt-2">
                        Revitalize your car's look, inside and out.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our professional dry cleaning and polishing services are designed to give your car a complete makeover. From deep-cleaning the interiors to restoring the exterior's shine, we use eco-friendly products and advanced techniques to ensure a pristine finish.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Explore our range of services to bring back the new-car feel.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Services Sections */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Dry Cleaning Services */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                1. Interior Dry Cleaning
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Upholstery & Carpet Cleaning:</strong> Removal of tough stains and dirt.</li>
                                <li><strong>Dashboard & Console Sanitization:</strong> A thorough, anti-bacterial clean.</li>
                                <li><strong>AC Vent Cleaning:</strong> Ensures fresh, odor-free air.</li>
                                <li><strong>Trunk & Mat Cleaning:</strong> Comprehensive cleaning of all interior spaces.</li>
                            </ul>
                        </div>

                        {/* Polishing Services */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                2. Exterior Polishing
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Paint Polishing:</strong> Removes minor scratches and swirl marks.</li>
                                <li><strong>Protective Waxing:</strong> Adds a durable, glossy finish to your car's paint.</li>
                                <li><strong>Headlight Restoration:</strong> Improves visibility and aesthetics.</li>
                                <li><strong>Chrome & Trim Polishing:</strong> Restores shine to all metal and plastic parts.</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Our Process Section */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Our Process
                        </h2>
                        <ol className="list-decimal list-inside text-gray-600 space-y-3">
                            <li><strong>Pre-Wash & Detail:</strong> Initial wash and detailing to remove surface dirt.</li>
                            <li><strong>Interior Treatment:</strong> Dry cleaning and sanitization of all interior surfaces.</li>
                            <li><strong>Paint Correction:</strong> Minor imperfections are addressed before polishing.</li>
                            <li><strong>Polishing & Waxing:</strong> Professional application of polish and wax for a deep shine.</li>
                            <li><strong>Final Inspection:</strong> A quality check to ensure every detail is perfect.</li>
                        </ol>
                    </div>

                    <div className="text-center mt-10">
                        <a 
                            href="/contact" 
                            className="inline-block py-3 px-8 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
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
