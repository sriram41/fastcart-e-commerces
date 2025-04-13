import React from 'react';
import { FiDownload, FiAlertCircle } from 'react-icons/fi';
import './ProductUpdates.css';

const ProductUpdates = () => {
  const updates = [
    { version: 'v2.1.0', date: '2023-05-10', changes: 5, security: true },
    { version: 'v2.0.5', date: '2023-04-22', changes: 3, security: false },
    { version: 'v2.0.0', date: '2023-03-15', changes: 12, security: true }
  ];

  return (
    <div className="updates-container">
      <div className="updates-header">
        <h2>Product Updates</h2>
        <button className="check-updates">
          Check for Updates
        </button>
      </div>
      
      <div className="updates-list">
        {updates.map((update, index) => (
          <div className="update-card" key={index}>
            <div className="update-header">
              <h3>{update.version}</h3>
              {update.security && <FiAlertCircle className="security-icon" />}
            </div>
            <div className="update-meta">
              <span className="date">Released: {update.date}</span>
              <span className="changes">{update.changes} changes</span>
            </div>
            <ul className="change-list">
              <li>New feature: Advanced reporting</li>
              <li>Improved performance</li>
              <li>Bug fixes</li>
            </ul>
            <button className="download-btn">
              <FiDownload className="button-icon" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductUpdates;