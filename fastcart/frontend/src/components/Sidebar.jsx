import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiList } from 'react-icons/fi'; 
import './Sidebar.css';
import {

  TagIcon,
  UsersIcon,
  ChartBarIcon,
  InboxIcon,
  BookOpenIcon,
  CloudArrowUpIcon, // Fixed import (renamed from CloudUploadIcon)
  UserCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="sidebar mobiled-sidebar-1362">
      
      
      <nav className="sidebar-nav">

      <Link to="/dashboard" className="nav-item">
        <FiHome className="nav-icon" />
        <span>Dashboard</span>
      </Link>

        

        <Link to="/orders" className="nav-item">
        <FiList className="nav-icon" />
        <span>Orders</span>
      </Link>
        
        <Link to="/products" className="nav-item">
          <TagIcon className="nav-icon" />
          <span>Products</span>
        </Link>
        
        <Link to="/categories" className="nav-item active">
          <TagIcon className="nav-icon" />
          <span>Categories</span>
        </Link>
        
        <Link to="/customers" className="nav-item">
          <UsersIcon className="nav-icon" />
          <span>Customers</span>
        </Link>
        
        <Link to="/reports" className="nav-item">
          <ChartBarIcon className="nav-icon" />
          <span>Reports</span>
        </Link>
        
        <Link to="/coupons" className="nav-item">
          <TagIcon className="nav-icon" />
          <span>Coupons</span>
        </Link>
        
        <Link to="/inbox" className="nav-item">
          <InboxIcon className="nav-icon" />
          <span>Inbox</span>
        </Link>
        
        <div className="sidebar-section">
          <h3>Other Information</h3>
          <Link to="/knowledge-base" className="nav-item">
            <BookOpenIcon className="nav-icon" />
            <span>Knowledge Base</span>
          </Link>
          <Link to="/product-updates" className="nav-item">
          <CloudArrowUpIcon className="nav-icon" /> 
            <span>Product Updates</span>
          </Link>
        </div>
        
        <div className="sidebar-section">
          <h3>Settings</h3>
          <Link to="/personal-settings" className="nav-item">
            <UserCircleIcon className="nav-icon" />
            <span>Personal Settings</span>
          </Link>
          <Link to="/global-settings" className="nav-item">
            <GlobeAltIcon className="nav-icon" />
            <span>Global Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;