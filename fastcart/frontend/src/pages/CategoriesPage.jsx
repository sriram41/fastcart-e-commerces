import React from 'react';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = [
    { name: 'Men Clothes', itemCount: 24 },
    { name: 'Women Clothes', itemCount: 12 },
    { name: 'Accessories', itemCount: 43 },
    { name: 'Action Clothes', itemCount: 31 },
    { name: 'Summer Clothes', itemCount: 26 },
    { name: 'Wedding Clothes', itemCount: 52 },
    { name: 'Spring Collection', itemCount: 24 },
    { name: 'Casual Clothes', itemCount: 52 },
    { name: 'Hats', itemCount: 20 }
  ];

  return (
    <div className="categories-page">
      <h1>Categories</h1>
      
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <h2>{category.name}</h2>
            <p>{category.itemCount} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;