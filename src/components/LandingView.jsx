import React from 'react';

const LandingView = ({ onSelectPath }) => {
  return (
    <div className="landing-view fade-in">
      <div className="brand-statement fade-in delay-1">
        <h1>Geeky Clean Technology</h1>
      </div>
      
      <div 
        className="path-card individuals"
        onClick={() => onSelectPath('individuals')}
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }}
      >
        <div className="path-card-content fade-in delay-2">
          <h2>For Individuals & Professionals</h2>
          <p>White-glove personal technology service that comes to you. We value your time, simplicity, and privacy.</p>
          <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Enter Experience</button>
        </div>
      </div>
      
      <div 
        className="path-card businesses"
        onClick={() => onSelectPath('businesses')}
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }}
      >
        <div className="path-card-content fade-in delay-3">
          <h2>For Small Businesses</h2>
          <p>Enterprise-grade technology strategy without the enterprise overhead. Your fractional CTO for growth.</p>
          <button className="btn btn-gold" style={{ marginTop: '1rem' }}>Enter Experience</button>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
