import React from 'react';

export default function Loyalty() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              {/* Crown icon removed */}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
            CAR CRAZE Loyalty Program
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Join our exclusive loyalty program and unlock amazing rewards
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Eligibility Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 rounded-full p-3">
                  {/* Award icon removed */}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-white mb-2">
                Eligibility Requirements
              </h2>
              <p className="text-center text-green-100 text-lg">
                Simple and straightforward to join
              </p>
            </div>
            
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  {/* Car icon removed */}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Join Our Loyalty Program Today!
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Become a valued member of CAR CRAZE's loyalty program when you purchase your first car from us. 
                    It's that simple - one purchase and you're automatically enrolled in our exclusive rewards program.
                  </p>
                  <div className="mt-4 flex items-center text-green-600 font-medium">
                    {/* ChevronRight icon removed */}
                    <span>Automatic enrollment with first purchase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Rewards Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 rounded-full p-3">
                  {/* Gift icon removed */}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-white mb-2">
                Referral Rewards Program
              </h2>
              <p className="text-center text-purple-100 text-lg">
                Share the love and earn big rewards
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                      {/* Users icon removed */}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Refer New Customers
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Introduce new customers to CAR CRAZE and watch your rewards grow with every successful referral.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                      {/* Percent icon removed */}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Earn Referral Bonus
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Receive a referral bonus equal to <span className="font-bold text-purple-600">1% of the car value</span> that your referral purchases.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-purple-600">1%</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Referral Bonus Rate
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Of the total car value purchased by your referral
                    </p>
                    
                    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border">
                      <div className="text-sm text-gray-500 mb-1">Example:</div>
                      <div className="text-lg font-semibold text-gray-900">
                        Car Value: ₹10,00,000
                      </div>
                      <div className="text-xl font-bold text-purple-600">
                        Your Bonus: ₹10,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              {/* Star icon removed */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Exclusive Member
            </h3>
            <p className="text-gray-600 text-sm">
              Join an exclusive community of CAR CRAZE customers with special privileges
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              {/* Gift icon removed */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Instant Rewards
            </h3>
            <p className="text-gray-600 text-sm">
              Start earning rewards immediately after your first car purchase
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              {/* Users icon removed */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Unlimited Referrals
            </h3>
            <p className="text-gray-600 text-sm">
              No limit on referrals - the more you refer, the more you earn
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Purchase your dream car and automatically join our loyalty program
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Explore Our Cars
          </button>
        </div>
      </div>
    </div>
  );
}
