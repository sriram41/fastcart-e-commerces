import React, { useState } from 'react';
import { FiMail, FiSearch, FiRefreshCw } from 'react-icons/fi';
import './Inbox.css';

const Inbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: 'customer@example.com', subject: 'Order question', date: '2023-05-15', read: false },
    { id: 2, from: 'support@payment.com', subject: 'Payment processed', date: '2023-05-14', read: true },
    { id: 3, from: 'user123@example.com', subject: 'Product return request', date: '2023-05-13', read: false }
  ]);

  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <FiMail className="header-icon" />
        <h2>Inbox</h2>
        <button className="refresh-button">
          <FiRefreshCw className="button-icon" />
        </button>
      </div>
      
      <div className="inbox-toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search messages..." />
        </div>
      </div>
      
      <div className="messages-list">
        {messages.map(message => (
          <div className={`message ${message.read ? 'read' : 'unread'}`} key={message.id}>
            <div className="message-checkbox">
              <input type="checkbox" />
            </div>
            <div className="message-from">{message.from}</div>
            <div className="message-subject">{message.subject}</div>
            <div className="message-date">{message.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;