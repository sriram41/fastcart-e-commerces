import React, { useState } from 'react';
import { FiBookOpen, FiSearch } from 'react-icons/fi';
import './KnowledgeBase.css';

const KnowledgeBase = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Getting Started Guide', category: 'General', views: 124 },
    { id: 2, title: 'Managing Products', category: 'Products', views: 89 },
    { id: 3, title: 'Order Processing', category: 'Orders', views: 156 }
  ]);

  return (
    <div className="knowledge-container">
      <div className="knowledge-header">
        <FiBookOpen className="header-icon" />
        <h2>Knowledge Base</h2>
      </div>
      
      <div className="knowledge-toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search articles..." />
        </div>
      </div>
      
      <div className="categories">
        <div className="category active">All Articles</div>
        <div className="category">General</div>
        <div className="category">Products</div>
        <div className="category">Orders</div>
        <div className="category">Customers</div>
      </div>
      
      <div className="articles-list">
        {articles.map(article => (
          <div className="article-card" key={article.id}>
            <h3>{article.title}</h3>
            <div className="article-meta">
              <span className="category">{article.category}</span>
              <span className="views">{article.views} views</span>
            </div>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris...</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;