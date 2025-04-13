import React, { useState } from 'react';
import { FiUser, FiGlobe, FiSave } from 'react-icons/fi';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    timezone: 'UTC+0',
    language: 'English'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-tabs">
        <button 
          className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          <FiUser className="tab-icon" />
          Personal Settings
        </button>
        <button 
          className={`tab ${activeTab === 'global' ? 'active' : ''}`}
          onClick={() => setActiveTab('global')}
        >
          <FiGlobe className="tab-icon" />
          Global Settings
        </button>
      </div>
      
      <div className="settings-content">
        {activeTab === 'personal' ? (
          <div className="personal-settings">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button className="save-btn">
              <FiSave className="button-icon" />
              Save Changes
            </button>
          </div>
        ) : (
          <div className="global-settings">
            <h3>System Settings</h3>
            <div className="form-group">
              <label>Timezone</label>
              <select 
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
              >
                <option>UTC+0</option>
                <option>UTC+1</option>
                <option>UTC+2</option>
              </select>
            </div>
            <div className="form-group">
              <label>Language</label>
              <select 
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <button className="save-btn">
              <FiSave className="button-icon" />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;