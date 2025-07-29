import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card welcome-card">
        <h2>Welcome, Maham!</h2>
        <p>Here’s a quick overview of your application.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card status-card">
          <h3>Application Status</h3>
          <p><strong>Status:</strong> Pending</p>
        </div>

        <div className="dashboard-card user-info-card">
          <h3>Your Info</h3>
          <ul>
            <li><strong>Name:</strong> Maham Waseem</li>
            <li><strong>Email:</strong> maham@example.com</li>
            <li><strong>Submitted On:</strong> July 28, 2025</li>
          </ul>
        </div>

        <div className="dashboard-card actions-card">
          <h3>Actions</h3>
          <button className="edit-btn">Edit Application</button>
        </div>
      </div>
    </div>
  );
}
