import React, { useState } from 'react';
import './Apply.css';

export default function Apply() {
  const [formData, setFormData] = useState({
    loanType: '',
    amount: '',
    reason: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Eligibility Check Example
    if (parseInt(formData.amount) < 1000) {
      alert("Loan amount must be at least 1000");
      return;
    }

    // For now just console log
    console.log("Form Submitted:", formData);

    // Reset form
    setFormData({
      loanType: '',
      amount: '',
      reason: '',
      name: '',
      phone: '',
      email: ''
    });
  };

  return (
    
    <div className="apply-background">
    <div className="apply-container">
      <h2>Apply for a Loan</h2>
      <form onSubmit={handleSubmit} className="apply-form">

        <label>Loan Type</label>
        <select name="loanType" value={formData.loanType} onChange={handleChange} required>
          <option value="">-- Select Loan Type --</option>
          <option value="Personal">Personal Loan</option>
          <option value="Education">Education Loan</option>
          <option value="Business">Business Loan</option>
        </select>

        <label>Amount</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

        <label>Reason for Loan</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required />

        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
    </div>
  );
}
