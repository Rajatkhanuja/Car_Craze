import React from 'react';
import oneLogo from '../assets/one.png';
import cars24Logo from '../assets/24.png';

const Roadside = () => {
  const exclusiveBenefits = [
    {
      icon: '🚗',
      title: 'Free Towing Service',
      description: 'Free Towing for Mechanical/Electrical breakdown/Accident up to 50kms'
    },
    {
      icon: '🔋',
      title: 'Battery Jumpstart',
      description: 'Quick Battery jumpstart service to get you back on the road Immediately'
    },
    {
      icon: '🛞',
      title: 'Flat Tyre Assistance',
      description: 'Towing to tyre Repair Shop/Authorized workshop whichever is nearest'
    },
    {
      icon: '🔑',
      title: 'Locked/Lost Key Assistance',
      description: 'Retrieve spare key (within city limits) or tow to nearest Workshop/Customer residence'
    },
    {
      icon: '⛽',
      title: 'Out of Fuel Assistance',
      description: 'Fuel Delivery up to 5 litres (fuel cost borne by customer on actuals)'
    },
    {
      icon: '⚠️',
      title: 'Wrong Fuelling Assistance',
      description: 'Recovery/Towing service for wrong fuel Situations'
    },
    {
      icon: '🔧',
      title: 'On Site Minor Repairs',
      description: 'Minor Repair Services Directly at your location when possible'
    }
  ];

  const terms = [
    '7 days cooling period applicable',
    'Any claim caused due to intentional acts or gross negligence',
    'Situations where the vehicle is involved in illegal activities',
    'Not serviceable outside the defined geographical limits'
  ];

  return (
    <div className="min-h-screen bg-white p-4 font-sans mt-20 ">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Roadside Assistance
            </h2>
            <p className="text-lg text-gray-700">
              Hassle free Assistance in case of a Roadside Emergency due to Breakdown or Accident.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 mb-8">
          {exclusiveBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-3 sm:p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="text-2xl sm:text-3xl">{benefit.icon}</div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terms and Conditions */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
            📋 Terms & Conditions
          </h3>
          <div className="space-y-3">
            {terms.map((term, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-red-500 font-bold text-lg">•</span>
                <p className="text-gray-700 text-sm">{term}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Assistance Partner */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🤝 Our Assistance Partner
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <img src={oneLogo} alt="OneAssist Logo" className="h-20 object-contain" />
                <p className="text-gray-600 text-sm">Trusted Roadside Partner</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                 <img src={cars24Logo} alt="CARS24 Logo" className="h-20 object-contain" />
                <p className="text-gray-600 text-sm">Reliable Service Provider</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            Working together to provide you the best roadside assistance experience
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-center">
          <div className="bg-red-600 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚨 Need Emergency Assistance?
            </h3>
           <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              GET IN TOUCH
            </button>
            <p className="text-white text-sm mt-3">
              Available 24/7 for your roadside emergencies
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            * Terms and conditions apply. Service availability may vary by location.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Roadside;