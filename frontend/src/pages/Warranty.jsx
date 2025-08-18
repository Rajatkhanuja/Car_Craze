import React, { useState } from 'react';

const WarrantyPage = () => {
    // State to manage which accordion section is open
    const [openSection, setOpenSection] = useState(null);

    // Function to toggle the accordion section
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section */}
                <div className="relative bg-blue-700 p-6 sm:p-8 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
                        Car Warranty & Protection Plan
                    </h1>
                    <p className="text-sm sm:text-base font-medium opacity-90 mt-2">
                        Driving with confidence, knowing you're protected.
                    </p>
                </div>

                {/* Main Content Sections */}
                <div className="p-6 sm:p-8">
                    {/* Warranty Overview Section */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            1. Coverage Overview
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Our comprehensive warranty plan covers your vehicle against manufacturing defects and major component failures for a period of **36 months** or **60,000 miles**, whichever comes first.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li><strong>Engine & Powertrain:</strong> Key components like the engine block, transmission, and drive axle.</li>
                            <li><strong>Electrical Systems:</strong> Alternator, starter motor, and wiring harnesses.</li>
                            <li><strong>Braking & Steering:</strong> Brake master cylinder and steering gear.</li>
                            <li><strong>Exclusions:</strong> Normal wear-and-tear items (tires, brake pads), cosmetic damage, and damage from accidents or unauthorized modifications.</li>
                        </ul>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* How to Claim Section */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            2. How to Make a Claim
                        </h2>
                        <ol className="list-decimal list-inside text-gray-600 space-y-3">
                            <li>
                                <strong>Contact Your Dealership:</strong> The first step is to bring your vehicle to an authorized service center or dealership.
                            </li>
                            <li>
                                <strong>Provide Documentation:</strong> Have your vehicle's VIN, service records, and warranty booklet ready.
                            </li>
                            <li>
                                <strong>Diagnosis & Approval:</strong> The service center will diagnose the issue and submit a claim for approval.
                            </li>
                            <li>
                                <strong>Repair:</strong> Once approved, the necessary repairs will be performed using genuine parts.
                            </li>
                        </ol>
                        <p className="text-gray-600 mt-4">
                            For a smoother process, please ensure all scheduled maintenance has been completed.
                        </p>
                        
                        <div className="text-center mt-6">
                            <a 
                                href="/contact" 
                                className="inline-block py-3 px-8 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg"
                            >
                                Contact Us to Start a Claim
                            </a>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Accordion Section for Detailed Terms */}
                    <div className="mb-8">
                        <h2
                            onClick={() => toggleSection('terms')}
                            className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-800 bg-gray-100 p-6 rounded-2xl transition-all hover:bg-gray-200 flex justify-between items-center"
                        >
                            3. Detailed Terms and Conditions
                            <span className="text-xl transform transition-transform duration-300">{openSection === 'terms' ? '▲' : '▼'}</span>
                        </h2>
                        {openSection === 'terms' && (
                            <div className="p-6 bg-gray-50 rounded-b-2xl border-x border-b border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-700 mt-2 mb-2">3.1 Scope of Warranty</h3>
                                <p className="text-gray-600 mb-4">
                                    This warranty is non-transferable and applies to the original owner. It covers hardware components only and does not extend to cosmetic damage, normal wear and tear, or external factors like accidents or environmental damage.
                                </p>
                                <h3 className="text-lg font-semibold text-gray-700 mt-2 mb-2">3.2 Limitation of Liability</h3>
                                <p className="text-gray-600 mb-4">
                                    Our liability is limited to the repair or replacement of the defective component. We are not liable for any indirect, incidental, or consequential damages.
                                </p>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* FAQ Section */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            4. Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                <strong>Q: Is routine maintenance covered?</strong><br />
                                A: No, this warranty does not cover routine maintenance such as oil changes, fluid checks, or tire rotations.
                            </p>
                            <p>
                                <strong>Q: What if my car breaks down away from home?</strong><br />
                                A: Our roadside assistance service can help transport your vehicle to the nearest authorized service center for a warranty claim.
                            </p>
                            <p>
                                <strong>Q: Can I use any repair shop?</strong><br />
                                A: All warranty claims must be performed by an authorized dealership or service center to ensure proper service and genuine parts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center p-6 sm:p-8 text-gray-500 text-sm border-t border-gray-200 mt-8">
                    <p>&copy; {new Date().getFullYear()} CarCraze. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default WarrantyPage;
