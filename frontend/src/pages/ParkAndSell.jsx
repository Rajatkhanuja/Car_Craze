import React from "react";
import serviceImg from "../assets/service.jpg";
const ParkAndSell = () => {
  const handleGetInTouch = () => {
    window.location.href = "/contact";
  };

  const features = [
    {
      icon: <TrendingUpIcon />,
      title: "Best Market Price",
      description: "Get the highest possible price based on current market demand"
    },
    {
      icon: <ShieldIcon />,
      title: "Complete Security",
      description: "Your vehicle is safe and secure in our monitored facility"
    },
    {
      icon: <ClockIcon />,
      title: "Quick Process",
      description: "Fast and transparent selling process with regular updates"
    },
    {
      icon: <UsersIcon />,
      title: "Expert Team",
      description: "Professional guidance from our experienced automotive team"
    }
  ];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      {/* Main Section - Maintaining Original Design */}
      <div className="park-sell-container">
        <div className="park-sell-content">
          <img 
           src={serviceImg}
            alt="Car Service" 
            className="car-image" 
          />
          
          <div className="park-sell-text">
            <h1>PARK & SELL PROGRAM</h1>
            
            </div>
        </div>
      </div>

      {/* New Enhanced Content */}
      
      {/* Statistics Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', fontWeight: 'bold' }}>
            Why Choose Our Park & Sell Program?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginTop: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e74c3c' }}>500+</div>
              <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Cars Sold Successfully</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e74c3c' }}>98%</div>
              <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Customer Satisfaction</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e74c3c' }}>15%</div>
              <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Higher Average Price</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e74c3c' }}>7</div>
              <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Days Average Selling Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Key Features & Benefits
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}>
                <div style={{ marginBottom: '20px' }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '15px', 
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            How It Works
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: "01",
                title: "Bring Your Car",
                description: "Visit our facility with your vehicle and required documents",
                icon: "🚗"
              },
              {
                step: "02", 
                title: "Professional Evaluation",
                description: "Our experts conduct thorough inspection and market analysis",
                icon: "🔍"
              },
              {
                step: "03",
                title: "Marketing & Display", 
                description: "We professionally photograph and market your car to buyers",
                icon: "📸"
              },
              {
                step: "04",
                title: "Secure Sale",
                description: "Handle negotiations, documentation and secure payment transfer",
                icon: "✅"
              }
            ].map((step, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '30px 20px',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {step.icon}
                </div>
                <div style={{
                  background: '#e74c3c',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  {step.step}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '15px', 
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Call to Action Section */}
      <div style={{
        background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Ready to Sell Your Car?
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Join hundreds of satisfied customers who got the best price for their vehicles
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={handleGetInTouch}
              style={{
                background: 'white',
                color: '#e74c3c',
                border: 'none',
                padding: '15px 40px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Get Started Today
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 40px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#e74c3c';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}>
              Call Now: +91 8094559521
            </button>
          </div>
        </div>
      </div>

      {/* Original CSS Styles */}
      <style jsx>{`
        .park-sell-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 70vh;
        }

        .park-sell-content {
          display: flex;
          margin-top: 50px;
          align-items: center;
          gap: 40px;
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .car-image {
          width: 400px;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .park-sell-text {
          flex: 1;
        }

        .park-sell-text h1 {
          color: #2c3e50;
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .purpose-section {
          margin-bottom: 30px;
        }

        .section-title {
          color: #2c3e50;
          font-size: 2rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .benefits-list {
          margin-bottom: 20px;
        }

        .benefit-item {
          color: #555;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
        }

        .bullet {
          color: #e74c3c;
          font-size: 1.2rem;
          font-weight: bold;
          margin-right: 10px;
          margin-top: 2px;
        }

        .get-in-touch-btn {
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          color: white;
          border: none;
          padding: 15px 30px;
          font-size: 1.2rem;
          font-weight: bold;
          border-radius: 25px;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
        }

        .get-in-touch-btn:hover {
          background: linear-gradient(135deg, #c0392b, #a93226);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
        }

        .get-in-touch-btn:active {
          transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .park-sell-container {
            padding: 20px 15px;
            min-height: 60vh;
            margin-top: 3rem;
          }
          
          .park-sell-content {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            margin-top: 20px;
            gap: 20px;
          }
          
          .car-image {
            width: 100%;
            max-width: 320px;
            height: 240px;
          }
          
          .park-sell-text h1 {
            font-size: 1.8rem;
            margin-bottom: 15px;
          }
          
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }
          
          .benefit-item {
            font-size: 0.95rem;
            margin-bottom: 12px;
            text-align: left;
          }
          
          .get-in-touch-btn {
            padding: 12px 25px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .park-sell-container {
            padding: 15px 10px;
          }
          
          .park-sell-content {
            padding: 15px;
            margin-top: 15px;
          }
          
          .car-image {
            max-width: 280px;
            height: 200px;
          }
          
          .park-sell-text h1 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          
          .section-title {
            font-size: 1.3rem;
            margin-bottom: 10px;
          }
          
          .benefit-item {
            font-size: 0.9rem;
            margin-bottom: 10px;
            flex-direction: row;
          }
          
          .bullet {
            font-size: 1rem;
            margin-right: 8px;
          }
          
          .get-in-touch-btn {
            padding: 10px 20px;
            font-size: 1rem;
            width: 100%;
            max-width: 200px;
          }
        }

        @media (max-width: 320px) {
          .park-sell-container {
            padding: 10px 8px;
          }
          
          .park-sell-content {
            padding: 12px;
          }
          
          .car-image {
            max-width: 260px;
            height: 180px;
          }
          
          .park-sell-text h1 {
            font-size: 1.3rem;
          }
          
          .section-title {
            font-size: 1.2rem;
          }
          
          .benefit-item {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

// Custom Icons (SVG components)
const TrendingUpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export default ParkAndSell;