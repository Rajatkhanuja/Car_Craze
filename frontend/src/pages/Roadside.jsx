import React from 'react';

const Roadside = () => {
  // Data for the different services offered, now using emojis for icons
  const servicesData = [
    {
      icon: '🔋',
      title: 'Battery Jump-Start',
      description: 'If your vehicle\'s battery is dead, we will provide immediate assistance to get you back on the road.',
      bgColor: 'bg-yellow-500'
    },
    {
      icon: '�',
      title: 'Tire Change',
      description: 'In case of a flat tire, we will replace it with your spare or arrange for a quick repair.',
      bgColor: 'bg-green-500'
    },
    {
      icon: '⚙️', // Replaced 'towing-vehicle' with a proper gear emoji
      title: 'Towing Service',
      description: 'We will safely transport your vehicle to the nearest authorized workshop for repair.',
      bgColor: 'bg-blue-500'
    },
    {
      icon: '⛽',
      title: 'Fuel Delivery',
      description: 'If you run out of fuel, we will deliver it to your location so you can continue your journey.',
      bgColor: 'bg-red-500'
    },
  ];

  const handleContactClick = () => {
    // This will navigate to the /contact page
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-8">

        {/* Header Section */}
        <div className="relative bg-red-600 p-6 sm:p-8 text-center text-white">
          {/* Placeholder image for a car broken down on the road */}
          <img
            src="https://placehold.co/800x400/DC2626/FFFFFF?text=Roadside+Assistance"
            alt="Roadside Assistance"
            className="w-full h-auto object-cover rounded-xl mb-4"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
            Roadside Assistance
          </h1>
          <p className="text-sm sm:text-base font-medium opacity-90">
            When you're in trouble, we're just a call away.
          </p>
        </div>

        {/* Services Section */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Our Key Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm transition-all hover:shadow-md border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${service.bgColor}`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Get Immediate Help
            </h3>
            <button
              onClick={handleContactClick}
              className="w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 shadow-lg flex items-center justify-center space-x-3"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadside;
