import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiList, 
  FiSearch, 
  FiFilter,
  FiDownload,
  FiPrinter,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';
import './Orders.css';

const Orders = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample order data
  const orders = [
    {
      id: '#ORD-1001',
      customer: 'John Smith',
      date: '2023-05-15',
      status: 'Completed',
      total: '$125.99',
      items: [
        { name: 'Wireless Headphones', price: '$59.99', quantity: 1 },
        { name: 'Phone Case', price: '$15.00', quantity: 2 },
        { name: 'Screen Protector', price: '$8.00', quantity: 1 }
      ]
    },
    {
      id: '#ORD-1002',
      customer: 'Sarah Johnson',
      date: '2023-05-14',
      status: 'Shipped',
      total: '$89.50',
      items: [
        { name: 'Smart Watch', price: '$79.99', quantity: 1 },
        { name: 'Charging Cable', price: '$9.51', quantity: 1 }
      ]
    },
    {
      id: '#ORD-1003',
      customer: 'Michael Brown',
      date: '2023-05-13',
      status: 'Processing',
      total: '$245.75',
      items: [
        { name: 'Bluetooth Speaker', price: '$45.00', quantity: 2 },
        { name: 'USB Hub', price: '$25.75', quantity: 1 },
        { name: 'Mouse Pad', price: '$12.00', quantity: 1 }
      ]
    }
  ];

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>
          <FiList className="header-icon" />
          Orders
        </h2>
        <div className="order-actions">
          <button className="action-button">
            <FiDownload className="button-icon" />
            Export
          </button>
          <button className="action-button">
            <FiPrinter className="button-icon" />
            Print
          </button>
        </div>
      </div>

      <div className="orders-toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-dropdown">
          <FiFilter className="filter-icon" />
          <span>Filter</span>
          <FiChevronDown className="chevron-icon" />
        </div>
      </div>

      <div className="orders-list">
        <div className="orders-list-header">
          <div className="order-column">Order ID</div>
          <div className="order-column">Customer</div>
          <div className="order-column">Date</div>
          <div className="order-column">Status</div>
          <div className="order-column">Total</div>
          <div className="order-column">Actions</div>
        </div>

        {filteredOrders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-summary" onClick={() => toggleOrder(order.id)}>
              <div className="order-cell">{order.id}</div>
              <div className="order-cell">{order.customer}</div>
              <div className="order-cell">{order.date}</div>
              <div className="order-cell">
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-cell">{order.total}</div>
              <div className="order-cell">
                <FiChevronRight className={`expand-icon ${expandedOrder === order.id ? 'expanded' : ''}`} />
              </div>
            </div>

            {expandedOrder === order.id && (
              <div className="order-details">
                <div className="order-items">
                  <h4>Order Items</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="order-actions">
                  <Link to={`/orders/${order.id.replace('#', '')}`} className="view-button">
                    View Details
                  </Link>
                  <button className="process-button">
                    {order.status === 'Processing' ? 'Process Order' : 'View Shipping'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;