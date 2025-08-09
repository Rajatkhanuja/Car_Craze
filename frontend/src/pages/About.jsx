import React from "react";
import { Car, Shield, Users, Award, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "20+ Years Experience",
      description: "Trusted automotive expertise since 2004",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Certified Vehicles",
      description: "Non-accidental, verified car history",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Customer First",
      description: "Dedicated to your satisfaction",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Transparency",
      description: "Complete vehicle history provided",
    },
  ];

  const partners = [
    "IDFC Bank",
    "Bajaj Finance",
    "Mahindra Finance",
    "AU Small Finance",
    "IndusInd Bank",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="h-20 bg-white shadow-sm"></div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-yellow-300">CAR CRAZE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your trusted automotive partner since 2004, delivering excellence in every journey
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <TrendingUp className="w-6 h-6" />
            <span>20+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Our Story */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Welcome to <strong className="text-blue-600">CAR CRAZE</strong>, a trusted name in the automotive industry since 2004. We’ve become experts in the sale and purchase of non-accidental and non-odometer tempered cars.
              </p>
              <p>
                We are your <strong className="text-purple-600">one-stop solution</strong> for financing, insurance, and finding certified vehicles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <Car className="w-20 h-20 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">20+ Years</h3>
              <p className="text-gray-600">Of Automotive Excellence</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose CAR CRAZE?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-8 md:p-12 mb-16 text-center">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            Buying or selling a car is more than a transaction – it's about <strong className="text-yellow-300">trust, reliability, and satisfaction</strong>.
          </p>
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm text-lg">
            <p>
              We focus on <strong className="text-blue-300">transparency and accountability</strong>. Every certified car comes with a full history report for your peace of mind.
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Financial Partners</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We’ve partnered with leading institutions to provide you the best finance options:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-6 py-4 shadow-md">
                <span className="text-gray-800 font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience the CAR CRAZE Difference</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Whether buying or selling, we ensure a <strong className="text-orange-600">memorable, reliable, and hassle-free</strong> experience.
          </p>
          <div className="inline-flex items-center bg-white rounded-full px-8 py-3 shadow-lg">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-gray-800 font-medium">Thank you for choosing CAR CRAZE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
