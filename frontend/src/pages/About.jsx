import React from "react";
import { Car, Shield, Users, Award, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "20+ Years Experience",
      description: "Trusted automotive expertise since 2004"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Certified Vehicles",
      description: "Non-accidental, verified car history"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Customer First",
      description: "Dedicated to your satisfaction"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Transparency",
      description: "Complete vehicle history provided"
    }
  ];

  const partners = [
    "IDFC Bank",
    "Bajaj Finance", 
    "Mahindra Finance",
    "AU Small Finance",
    "IndusInd Bank"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navbar placeholder */}
      <div className="h-20 bg-white shadow-sm"></div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="text-yellow-300">CAR CRAZE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Your trusted automotive partner since 2004, delivering excellence in every journey
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <TrendingUp className="w-6 h-6" />
              <span>20+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to <strong className="text-blue-600">CAR CRAZE</strong>, a trusted name in the automotive industry since our establishment in 2004. With over two decades of experience, we have proudly emerged as seasoned experts in the sale and purchase of non-accidental and non-odometer tempered cars.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our commitment to providing a seamless automotive experience led us to become a <strong className="text-purple-600">one-stop solution</strong> for all your car-related needs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <Car className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">20+ Years</h3>
                <p className="text-gray-600">Of Automotive Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose CAR CRAZE?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl text-white p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              At CAR CRAZE, we understand that buying or selling a car involves more than a transaction – it's about <strong className="text-yellow-300">trust, reliability, and satisfaction</strong>. Our dedicated team works tirelessly to ensure that each customer receives the highest level of service.
            </p>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-lg">
                What sets us apart is our emphasis on <strong className="text-blue-300">transparency and accountability</strong>. Every certified car at CAR CRAZE comes with a detailed history, providing you with the confidence and peace of mind you deserve.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Financial Partners
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            We take pride in our longstanding partnerships with leading financial institutions, ensuring you have access to a variety of financing options tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
                <span className="text-gray-800 font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experience the CAR CRAZE Difference
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            As an established player in the market, CAR CRAZE remains committed to delivering excellence in every aspect of the automotive journey. Whether you are a buyer or a seller, our mission is to make your experience with us <strong className="text-orange-600">memorable, reliable, and hassle-free</strong>.
          </p>
          <div className="inline-flex items-center bg-white rounded-full px-8 py-3 shadow-lg">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-gray-800 font-medium">Thank you for considering CAR CRAZE for all your automotive needs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;