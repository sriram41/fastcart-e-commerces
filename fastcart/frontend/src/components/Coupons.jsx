import React, { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import './Coupons.css';

const Coupons = () => {
  const [coupons, setCoupons] = useState([
    { code: 'SUMMER20', discount: '20%', uses: 45, expiry: '2023-08-31' },
    { code: 'FREESHIP', discount: 'Free Shipping', uses: 12, expiry: '2023-07-15' },
    { code: 'NEW10', discount: '$10', uses: 89, expiry: '2023-09-30' }
  ]);

  return (
    <div className="coupons-container">
      <div className="coupons-header">
        <h2>Coupons</h2>
        <button className="add-button">
          <FiPlus className="button-icon" />
          Create Coupon
        </button>
      </div>
      
      <div className="coupons-toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search coupons..." />
        </div>
      </div>
      
      <div className="coupons-table">
        <div className="table-header">
          <div>Code</div>
          <div>Discount</div>
          <div>Uses</div>
          <div>Expiry Date</div>
          <div>Actions</div>
        </div>
        
        {coupons.map((coupon, index) => (
          <div className="coupon-row" key={index}>
            <div className="coupon-code">{coupon.code}</div>
            <div>{coupon.discount}</div>
            <div>{coupon.uses}</div>
            <div>{coupon.expiry}</div>
            <div className="actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;