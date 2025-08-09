import React from "react";
import Navbar from "../components/Navbar"; // ✅ Navbar added
import { Car, Shield, Users, Award, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Certified Cars Only",
      description: "Every vehicle is verified to be non-accidental and non-odometer tempered.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Trusted Since 2004",
      description: "20+ years of trust, quality service, and transparency in the automobile market.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer-Centric",
      description: "Satisfaction, transparency, and service are at the heart of all we do.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Leading Finance Partners",
      description: "Connected with IDFC, Bajaj Finance, AU Small Finance, Mahindra & Mahindra & more.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "One-Stop Solution",
      description: "From insurance to loans and vehicle certification – everything under one roof.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Memorable Experience",
      description: "We make car buying and selling reliable, easy, and joyful.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar /> {/* ✅ Navbar shown */}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CAR CRAZE</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Delivering trust, transparency, and top-notch service in the car market since 2004.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-6">
            Welcome to <strong>CAR CRAZE</strong>, a trusted name in the automotive industry since our establishment in 2004. 
            With over two decades of experience, we have proudly emerged as seasoned experts in the sale and purchase of 
            non-accidental and non-odometer tempered cars.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our commitment to providing a seamless automotive experience led us to become a 
            <strong> one-stop solution</strong> for all your car-related needs. Whether you're financing, insuring, or exploring 
            certified vehicles, we've got you covered.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            What sets us apart is our emphasis on <strong>transparency and accountability</strong>. Every certified car at 
            CAR CRAZE comes with a detailed history for your peace of mind.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            We proudly collaborate with top financial institutions like IDFC, Bajaj Finance, Mahindra & Mahindra Finance, 
            AU Small Finance, and IndusInd Bank to offer custom financing solutions.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Whether you're a buyer or a seller, our goal is to make your journey <strong>memorable, reliable, and hassle-free</strong>.
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Thank you</strong> for choosing CAR CRAZE for your automotive needs.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
