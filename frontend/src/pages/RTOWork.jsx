import React from 'react';

const RTOWork = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-20">

                {/* Header Section */}
                <div className="relative bg-cyan-700 p-6 sm:p-8 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
                        RTO Work & Documentation
                    </h1>
                    <p className="text-sm sm:text-base font-medium opacity-90 mt-2">
                        Seamless paperwork, stress-free ownership.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-8">
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Navigating RTO processes can be complex and time-consuming. Our expert team provides end-to-end assistance with all your vehicle-related documentation, ensuring a smooth and hassle-free experience. We handle everything from registration to license renewals so you can focus on driving.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Below is a list of the key RTO services we offer.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Services Sections */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vehicle Registration */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                1. Vehicle Registration
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>New Vehicle Registration:</strong> Complete paperwork for your new car.</li>
                                <li><strong>Registration Renewal:</strong> Timely renewal of your vehicle's registration certificate (RC).</li>
                                <li><strong>Registration Transfer:</strong> Seamless transfer of ownership and RC details.</li>
                            </ul>
                        </div>

                        {/* Driver's License */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                2. Driver's License
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>License Renewal:</strong> Hassle-free renewal of your driving license.</li>
                                <li><strong>Duplicate License:</strong> Assistance in obtaining a duplicate license.</li>
                                <li><strong>Change of Address:</strong> Updating your address on your license.</li>
                            </ul>
                        </div>

                        {/* Other Services */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                3. Other RTO Services
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Change of Ownership:</strong> Full support for buying or selling a used vehicle.</li>
                                <li><strong>Duplicate Documents:</strong> Help with lost or damaged RC books and keys.</li>
                                <li><strong>NOC (No Objection Certificate):</strong> Obtaining NOC for inter-state vehicle transfer.</li>
                            </ul>
                        </div>

                        {/* Required Documents */}
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                4. Required Documents
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Original Vehicle documents.</li>
                                <li>Proof of Identity and Address.</li>
                                <li>Pollution Under Control (PUC) certificate.</li>
                                <li>Insurance Certificate.</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                *Required documents may vary based on the specific service.
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
