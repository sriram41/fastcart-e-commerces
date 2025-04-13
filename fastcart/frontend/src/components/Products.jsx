import React, { useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Headphones', price: '$59.99', stock: 42, category: 'Electronics' },
    { id: 2, name: 'Smart Watch', price: '$199.99', stock: 15, category: 'Electronics' },
    { id: 3, name: 'Cotton T-Shirt', price: '$24.99', stock: 87, category: 'Fashion' }
  ]);

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Products</h2>
        <button className="add-button">
          <FiPlus className="button-icon" />
          Add Product
        </button>
      </div>
      
      <div className="products-toolbar">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search products..." />
        </div>
      </div>
      
      <div className="products-table">
        <div className="table-header">
          <div>Product Name</div>
          <div>Price</div>
          <div>Stock</div>
          <div>Category</div>
          <div>Actions</div>
        </div>
        
        {products.map(product => (
          <div className="product-row" key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div className={product.stock < 20 ? 'low-stock' : ''}>
              {product.stock}
            </div>
            <div>{product.category}</div>
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

export default Products;