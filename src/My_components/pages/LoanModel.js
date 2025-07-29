import React from 'react';
import './LoanModel.css';


export default function LoanModel({ show, onClose, loanType }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{loanType} - Application</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Loan Amount:</label>
          <input type="number" placeholder="Amount you're looking for" required />

          <label>Purpose:</label>
          <textarea placeholder="Why do you need the loan?" rows="3" required></textarea>

          <button type="submit">Submit</button>
        </form>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
