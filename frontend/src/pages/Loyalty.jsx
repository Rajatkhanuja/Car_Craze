import React, { useState, useEffect } from 'react';

export default function Loyalty() {
  // Screen ki width ko track karne ke liye state ka upyog karein
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Screen ke resize hone par width ko update karne ka function
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener ko jodna
    window.addEventListener('resize', handleResize);

    // Component ke unmount hone par listener ko hatana
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Screen ki width ke adhaar par style decide karein
  const benefitContainerStyle = windowWidth > 768 ? {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem'
  } : {
    display: 'flex',
    flexDirection: 'column', // Mobile par boxes ko ek ke niche ek karne ke liye
    gap: '1.5rem',
    marginBottom: '4rem'
  };

  const handleButtonClick = () => {
    // Button click hone par is URL par navigate karein
    window.location.href = '/stock';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #faf5ff)' }}>
      {/* Header Section */}
      <div style={{ backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)', color: '#ffffff', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', borderRadius: '9999px', padding: '1rem' }}>
              <span style={{ fontSize: '3rem', lineHeight: '1', color: '#fde047' }}>👑</span>
            </div>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #ffffff, #fde047)' }}>
            CAR CRAZE Loyalty Program
          </h1>
          <p style={{ fontSize: '1.5rem', lineHeight: '2rem', color: '#bfdbfe', fontWeight: '300' }}>
            Join our exclusive loyalty program and unlock amazing rewards
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '4rem 1rem' }}>
        
        {/* Eligibility Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #f3f4f6', overflow: 'hidden' }}>
            <div style={{ backgroundImage: 'linear-gradient(to right, #22c55e, #059669)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', padding: '0.75rem' }}>
                  <span style={{ fontSize: '2rem', color: '#ffffff' }}>🏆</span>
                </div>
              </div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#ffffff', marginBottom: '0.5rem' }}>
                Eligibility Requirements
              </h2>
              <p style={{ textAlign: 'center', color: '#dcfce7', fontSize: '1.125rem' }}>
                Simple and straightforward to join
              </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#dcfce7', borderRadius: '9999px', padding: '0.75rem', flexShrink: '0' }}>
                  <span style={{ fontSize: '1.5rem', color: '#16a34a' }}>🚗</span>
                </div>
                <div style={{ flex: '1' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                    Join Our Loyalty Program Today!
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '1.125rem', lineHeight: '1.625' }}>
                    Become a valued member of CAR CRAZE's loyalty program when you purchase your first car from us. 
                    It's that simple - one purchase and you're automatically enrolled in our exclusive rewards program.
                  </p>
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', color: '#16a34a', fontWeight: '500' }}>
                    <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>➡️</span>
                    <span>Automatic enrollment with first purchase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Rewards Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #f3f4f6', overflow: 'hidden' }}>
            <div style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #db2777)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', padding: '0.75rem' }}>
                  <span style={{ fontSize: '2rem', color: '#ffffff' }}>🎁</span>
                </div>
              </div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#ffffff', marginBottom: '0.5rem' }}>
                Referral Rewards Program
              </h2>
              <p style={{ textAlign: 'center', color: '#f3e8ff', fontSize: '1.125rem' }}>
                Share the love and earn big rewards
              </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ backgroundColor: '#f3e8ff', borderRadius: '9999px', padding: '0.75rem', flexShrink: '0' }}>
                      <span style={{ fontSize: '1.5rem', color: '#7c3aed' }}>👥</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                        Refer New Customers
                      </h3>
                      <p style={{ color: '#4b5563', lineHeight: '1.625' }}>
                        Introduce new customers to CAR CRAZE and watch your rewards grow with every successful referral.
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ backgroundColor: '#fef9c3', borderRadius: '9999px', padding: '0.75rem', flexShrink: '0' }}>
                      <span style={{ fontSize: '1.5rem', color: '#ca8a04' }}>💰</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                        Earn Referral Bonus
                      </h3>
                      <p style={{ color: '#4b5563', lineHeight: '1.625' }}>
                        Receive a referral bonus equal to <span style={{ fontWeight: 'bold', color: '#7c3aed' }}>1% of the car value</span> that your referral purchases.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div style={{ backgroundImage: 'linear-gradient(to bottom right, #faf5ff, #fdf2f8)', borderRadius: '0.75rem', padding: '1.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '9999px', width: '5rem', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                      <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#7c3aed' }}>1%</span>
                    </div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                      Referral Bonus Rate
                    </h4>
                    <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                      Of the total car value purchased by your referral
                    </p>
                    
                    <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Example:</div>
                      <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                        Car Value: ₹10,00,000
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#7c3aed' }}>
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
        <div style={benefitContainerStyle}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', padding: '1.5rem', textAlign: 'center', border: '1px solid #f3f4f6', transitionProperty: 'box-shadow', transitionDuration: '300ms', cursor: 'pointer' }}>
            <div style={{ backgroundColor: '#dbeafe', borderRadius: '9999px', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <span style={{ fontSize: '2rem', color: '#2563eb' }}>⭐</span>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Exclusive Member
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
              Join an exclusive community of CAR CRAZE customers with special privileges
            </p>
          </div>
          
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', padding: '1.5rem', textAlign: 'center', border: '1px solid #f3f4f6', transitionProperty: 'box-shadow', transitionDuration: '300ms', cursor: 'pointer' }}>
            <div style={{ backgroundColor: '#dcfce7', borderRadius: '9999px', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <span style={{ fontSize: '2rem', color: '#16a34a' }}>🎁</span>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Instant Rewards
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
              Start earning rewards immediately after your first car purchase
            </p>
          </div>
          
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', padding: '1.5rem', textAlign: 'center', border: '1px solid #f3f4f6', transitionProperty: 'box-shadow', transitionDuration: '300ms', cursor: 'pointer' }}>
            <div style={{ backgroundColor: '#f3e8ff', borderRadius: '9999px', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <span style={{ fontSize: '2rem', color: '#7c3aed' }}>👥</span>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Unlimited Referrals
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
              No limit on referrals - the more you refer, the more you earn
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)', borderRadius: '1rem', padding: '2rem', textAlign: 'center', color: '#ffffff' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Start Earning?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#bfdbfe' }}>
            Purchase your dream car and automatically join our loyalty program
          </p>
          <button onClick={handleButtonClick} style={{ backgroundColor: '#ffffff', color: '#2563eb', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: '600', fontSize: '1.125rem', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: 'none', transitionProperty: 'background-color', transitionDuration: '300ms', outline: 'none' }}>
            Explore Our Cars
          </button>
        </div>
      </div>
    </div>
  );
}
