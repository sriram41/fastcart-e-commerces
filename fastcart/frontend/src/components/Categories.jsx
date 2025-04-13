import React, { useState } from 'react';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', products: 24, subcategories: ['Smartphones', 'Laptops', 'Accessories'] },
    { id: 2, name: 'Fashion', products: 56, subcategories: ['Men', 'Women', 'Kids'] },
    { id: 3, name: 'Home & Kitchen', products: 32, subcategories: ['Furniture', 'Appliances'] }
  ]);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h2>Categories</h2>
        <button className="add-button">
          <FiPlus className="button-icon" />
          Add Category
        </button>
      </div>
      
      <div className="categories-list">
        {categories.map(category => (
          <div className="category-card" key={category.id}>
            <div 
              className="category-header"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="category-name">
                {category.name}
                <span className="product-count">{category.products} products</span>
              </div>
              <FiChevronDown className={`expand-icon ${expandedCategory === category.id ? 'expanded' : ''}`} />
            </div>
            
            {expandedCategory === category.id && (
              <div className="subcategories">
                {category.subcategories.map((subcat, index) => (
                  <div className="subcategory" key={index}>
                    {subcat}
                    <div className="subcategory-actions">
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;