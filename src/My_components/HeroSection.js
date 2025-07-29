import React from 'react';
import './HeroSection.css'; // create this for styles

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Your money is important,<br />
          <span className="highlight"> and we treat it that way</span>
        </h1>
        <p className="subheading">
          Grow your savings smarter and make the most of every rupee you earn.
        </p>

        <h3 className="loan-title">What can we help you with today?</h3>
        <p className="note">
          Get your personalized rate no credit score impact, no strings attached.
        </p>

        <div className="loan-cards">
          <div className="card">
            <span className="badge">Up to 5% APR discount</span>
            <h4>Debt Paydown Loan</h4>
            <p>
              A debt consolidation loan up to $60,000 to pay off credit card debt or personal loans.
            </p>
            <button>Check Your Rate</button>
          </div>

          <div className="card">
            <h4>Cash Loan</h4>
            <p>
              A personal loan up to $60,000 for big expenses like home repair or medical.
            </p>
            <button>Check Your Rate</button>
          </div>

          <div className="card">
            <h4>Medical Loans</h4>
            <p>
              Up to $65,000 to cover dental, fertility, and more from a network of providers.
            </p>
            <button>Check Your Rate</button>
          </div>

          <div className="card">
            <h4>Auto Loan Refinance</h4>
            <p>
              Flexible terms and competitive rates to help you pay less.
            </p>
            <button>Check Your Rate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
