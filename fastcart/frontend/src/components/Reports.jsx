import React from 'react';
import { FiBarChart2, FiDownload } from 'react-icons/fi';
import './Reports.css';

const Reports = () => {
  const reportTypes = [
    'Sales Report',
    'Customer Acquisition',
    'Product Performance',
    'Inventory Levels',
    'Revenue by Category'
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <FiBarChart2 className="header-icon" />
        <h2>Reports</h2>
      </div>
      
      <div className="report-types">
        {reportTypes.map((report, index) => (
          <div className="report-card" key={index}>
            <h3>{report}</h3>
            <p>Generate detailed {report.toLowerCase()} for selected period</p>
            <div className="report-actions">
              <select className="period-select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last quarter</option>
                <option>Custom range</option>
              </select>
              <button className="generate-btn">
                <FiDownload className="button-icon" />
                Generate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;