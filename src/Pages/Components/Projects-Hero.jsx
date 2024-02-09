import React from 'react';
import './.././Styles/Projects-Hero.css';

const Hero = () => {
  return (
    <>
<section id="features" className="features">
    <div className="feature-card">
        <img src="../public/favicon-trans.png" alt="Logo" className="Logo"/>
        <h2>Phoenix Open Tech</h2>
        <p>An open-source community creating awesome projects</p>
        <button className="btn btn-primary btn-sm mx-2">
       <i class="bi bi-book"></i> Learn More
        </button>
        <button className="btn btn-light btn-sm mx-2">
       <i class="bi bi-github"></i> GitHub
        </button>
    </div>
    <div className="feature-card">
        <i className="bi bi-shield-lock-fill"></i>
        <h2>Strong Encryption</h2>
        <p>Your files are protected with strong encryption.</p>
    </div>
    <div className="feature-card">
        <i className="bi bi-qr-code-scan"></i>
        <h2>Scan and share</h2>
        <p>Scan and share to nearby device seamlessly</p>
    </div>
</section>
    </>
  );
};

export default Hero;