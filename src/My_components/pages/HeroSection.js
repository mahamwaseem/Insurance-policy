import React, { useState } from 'react';
import './HeroSection.css';
import LoanModel from './LoanModel'; 

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState('');

  const openModal = (loanType) => {
    setSelectedLoan(loanType);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

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
          Get your personalized rate — no credit score impact, no strings attached.
        </p>

        <div className="loan-cards">
          <div className="card">
            <span className="badge">Up to 5% APR discount</span>
            <h4>Debt Paydown Loan</h4>
            <p>A loan up to $60,000 to pay off credit cards or personal debts.</p>
            <button onClick={() => openModal("Debt Paydown Loan")}>Check Your Rate</button>
          </div>

          <div className="card">
            <h4>Cash Loan</h4>
            <p>Use it for big expenses like home repairs, weddings, or emergencies.</p>
            <button onClick={() => openModal("Cash Loan")}>Check Your Rate</button>
          </div>

          <div className="card">
            <h4>Medical Loans</h4>
            <p>Up to $65,000 to cover dental, fertility, surgeries, and more.</p>
            <button onClick={() => openModal("Medical Loan")}>Check Your Rate</button>
          </div>

          <div className="card">
            <h4>Auto Loan Refinance</h4>
            <p>Lower your interest rate and monthly payments on your car loan.</p>
            <button onClick={() => openModal("Auto Loan Refinance")}>Check Your Rate</button>
          </div>
        </div>
      </div>

      {/* Only show the modal when showModal is true */}
      {showModal && (
        <LoanModel show={showModal} onClose={closeModal} loanType={selectedLoan} />
      )}
    </div>
  );
}
