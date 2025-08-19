import React from 'react';

const DentingPainting = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section */}
                <div className="relative bg-red-700 p-6 sm:p-8 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
                        Denting & Painting Services
                    </h1>
                    <p className="text-sm sm:text-base font-medium opacity-90 mt-2">
                        Bring back the flawless finish of your car.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our state-of-the-art denting and painting services are designed to restore your vehicle's aesthetic appeal, fixing everything from minor scratches to major collision damage. Our expert technicians use precision tools and high-quality paint to deliver a perfect, long-lasting finish.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Discover the range of services we offer to make your car look brand new again.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Services Sections */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Denting Services */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                1. Denting Services
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Paintless Dent Removal (PDR):</strong> For small dents and dings.</li>
                                <li><strong>Major Dent Repair:</strong> Restoration of panels with significant damage.</li>
                                <li><strong>Bumper Repair & Replacement:</strong> Professional repair for plastic and fiberglass bumpers.</li>
                                <li><strong>Panel Alignment:</strong> Ensuring perfect fit and finish of all body panels.</li>
                            </ul>
                        </div>

                        {/* Painting Services */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                2. Painting Services
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Full Body Painting:</strong> A complete, showroom-quality repaint.</li>
                                <li><strong>Panel Repainting:</strong> Matching your car's original color with precision.</li>
                                <li><strong>Scratch & Chip Repair:</strong> Seamlessly fix minor paint damage.</li>
                                <li><strong>Ceramic Coating:</strong> A protective layer for a brilliant, long-lasting shine.</li>
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
                            <li><strong>Inspection & Estimate:</strong> Our technicians will assess the damage and provide a detailed quote.</li>
                            <li><strong>Preparation:</strong> The area is cleaned, sanded, and masked to protect unaffected parts.</li>
                            <li><strong>Denting & Filling:</strong> Dents are professionally removed and filled to create a smooth surface.</li>
                            <li><strong>Painting & Curing:</strong> Multiple layers of paint are applied in a dust-free environment, followed by curing.</li>
                            <li><strong>Polishing & Finishing:</strong> The painted area is polished to a high gloss, blending it perfectly with the rest of the car.</li>
                        </ol>
                    </div>

                    <div className="text-center mt-10">
                        <a 
                            href="/contact" 
                            className="inline-block py-3 px-8 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg no-underline"
                        >
                            Request a Quote
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
