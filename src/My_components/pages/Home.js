import React from 'react';
import HeroSection from './HeroSection';
import './Home.css'; // Import external CSS for styling

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Welcome Section */}
      <section className="container-section">
        <h1 className="section-title">Welcome to Our Platform</h1>
        <p className="section-text">
          We're here to simplify your insurance experience — providing easy access, personalized policies,
          and peace of mind every step of the way.
        </p>
      </section>

      {/* About Section */}
      <section className="container-section">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          Our mission is to empower individuals by making insurance more accessible, secure, and
          understandable. Whether you're planning for health, life, or property, we guide you with the
          right choices and unmatched support.
        </p>
      </section>

      {/* Services / Features Section */}
      <section className="container-section">
        <h2 className="section-title">Our Services</h2>
        <div className="cards-wrapper">
          <div className="card-item">
            <h3>Easy Application</h3>
            <p>Apply for any policy within minutes using our intuitive online forms.</p>
          </div>
          <div className="card-item">
            <h3>Secure & Trusted</h3>
            <p>Your data is encrypted and handled with top-level security protocols.</p>
          </div>
          <div className="card-item">
            <h3>Expert Support</h3>
            <p>Our dedicated team is available 24/7 to guide and support you.</p>
          </div>
        </div>
      </section>
    </>
  );
}
