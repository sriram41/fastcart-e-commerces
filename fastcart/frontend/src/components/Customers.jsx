import React, { useState } from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import './Customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Smith', email: 'john@example.com', orders: 5, joined: '2023-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', orders: 12, joined: '2022-11-03' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', orders: 3, joined: '2023-03-22' }
  ]);

  return (
    <div className="customers-container">
      <div className="customers-header">
        <h2>
          <FiUser className="header-icon" />
          Customers
        </h2>
      </div>
      
      <div className="customers-toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search customers..." />
        </div>
      </div>
      
      <div className="customers-table">
        <div className="table-header">
          <div>Name</div>
          <div>Email</div>
          <div>Orders</div>
          <div>Member Since</div>
          <div>Actions</div>
        </div>
        
        {customers.map(customer => (
          <div className="customer-row" key={customer.id}>
            <div>{customer.name}</div>
            <div>{customer.email}</div>
            <div>{customer.orders}</div>
            <div>{customer.joined}</div>
            <div className="actions">
              <button className="view-btn">View</button>
              <button className="message-btn">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;