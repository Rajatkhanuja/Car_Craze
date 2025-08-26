import React, { useState } from 'react';
import carImage from '../assets/ii.jpg'; // Corrected import path

const Insurance = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    { id: 'third-party', name: 'Third Party', price: 'Starting from ₹2,500/Year', coverage: 'Legal Coverage' },
    { id: 'comprehensive', name: 'Comprehensive', price: 'Starting from ₹6,000/Year', coverage: 'Full Protection' },
    { id: 'zero-dep', name: 'Zero Depreciation', price: 'Starting from ₹8,000/Year', coverage: 'Maximum Cover' }
  ];

   const features = [
    "Cashless Garages",
    "Road Side Assistance",
    "Quick Claim Settlement",
    "Fire/ Theft Protection"
  ];
 const handleContactClick = () => {
    // This simulates a navigation to a new page.
    // In a real application with a router like React Router, you would use a hook like useNavigate().
    window.location.href = '/contact';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-4">
      {/* Added mt-8 to create top margin for the entire card */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-8"> 

        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-center text-white">
          {/* The image fills most of the top part of the box */}
          <img
            src={carImage}
            alt="Car Image"
            className="w-full h-auto object-cover rounded-lg mb-1"
          />
          {/* Added mb-4 for margin-bottom to create space */}

          {/* The text will appear directly below the image */}
          <h1 className="text-2xl font-bold mb-0">Car Insurance</h1>
          <p className="text-red-600 font-bold mt-1">Drive Safe, Stay Protected</p>
        </div>

        {/* Plans Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Insurance Plans</h2>

          <div className="space-y-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                    <p className="text-red-600 font-medium">{plan.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-bold text-green-600">{plan.coverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
         <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Key Benefits</h3>
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-4 h-4 text-green-500">✓</span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-orange-600">🛡️</span>
              <h3 className="font-semibold text-orange-800">Why Car Insurance?</h3>
            </div>
            <p className="text-sm text-orange-700">
              Legal Requirement + Financial Protection against Accidents, Theft & Damages.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-3">Get Best Quotes</h3>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-sm text-white">
  <span className="text-red-600 text-lg">📞</span>
  <span className="whitespace-nowrap">+91 8094559521,</span>
  <span className="whitespace-nowrap">+91 8369908950</span>
</div>
           <div className="flex items-center space-x-3">
                <span className="text-red-600">✉️</span>
                <span className="text-sm">carcrazeudr@gmail.com</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleContactClick}
            className="w-full mt-6 py-3 rounded-xl font-semibold transition-all bg-red-600 text-white hover:bg-red-700"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insurance;