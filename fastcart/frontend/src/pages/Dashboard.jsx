import React, { useState } from 'react';
import './Dashboard.css';
import CategoryCard from '../components/CategoryCard';
import Sidebar from '../components/Sidebar';
import LogoutButton from '../components/LogoutButton';
import Header from '../components/Header';

const Dashboard = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Men Clothes', itemCount: 24 },
    { id: 2, name: 'Women Clothes', itemCount: 12 },
    { id: 3, name: 'Accessories', itemCount: 43 },
    { id: 4, name: 'Cotton Clothes', itemCount: 31 },
    { id: 5, name: 'Summer Clothes', itemCount: 26 },
    { id: 6, name: 'Wedding Clothes', itemCount: 52 },
    { id: 7, name: 'Spring Collection', itemCount: 24 },
    { id: 8, name: 'Casual Clothes', itemCount: 52 },
    { id: 9, name: 'Hats', itemCount: 20 }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newItemCount, setNewItemCount] = useState(0);

  const handleAddCategory = () => {
    if (newCategoryName.trim() === '') {
      alert('Please enter a category name');
      return;
    }

    const newCategory = {
      id: categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1,
      name: newCategoryName,
      itemCount: parseInt(newItemCount) || 0
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setNewItemCount(0);
    setShowAddModal(false);
  };

  return (
    <div className='total-1-164'>
      <div className='header-721'>
        <Header />
      </div>
      <div className='total-221'>
        <div className='side-bar-latest-1121'>
          <Sidebar />
        </div>
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Categories </h1>
            <button 
              className="add-category-btn"
              onClick={() => setShowAddModal(true)}
            >
              + Add Category
            </button>
          </div>
          <div className="categories-grid">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Category</h2>
            <div className="form-group">
              <label>Category Name:</label>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter category name"
              />
            </div>
            <div className="form-group">
              <label>Item Count:</label>
              <input
                type="number"
                value={newItemCount}
                onChange={(e) => setNewItemCount(e.target.value)}
                placeholder="Enter item count"
              />
            </div>
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button 
                className="add-btn"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;




// import React from 'react';
// import './Dashboard.css';
// import CategoryCard from '../components/CategoryCard';
// import Sidebar from '../components/Sidebar';
// import LogoutButton from '../components/LogoutButton';
// import Header from '../components/Header';

// const Dashboard = () => {
//   const categories = [
//     { id: 1, name: 'Men Clothes', itemCount: 24 },
//     { id: 2, name: 'Women Clothes', itemCount: 12 },
//     { id: 3, name: 'Accessories', itemCount: 43 },
//     { id: 4, name: 'Cotton Clothes', itemCount: 31 },
//     { id: 5, name: 'Summer Clothes', itemCount: 26 },
//     { id: 6, name: 'Wedding Clothes', itemCount: 52 },
//     { id: 7, name: 'Spring Collection', itemCount: 24 },
//     { id: 8, name: 'Casual Clothes', itemCount: 52 },
//     { id: 9, name: 'Hats', itemCount: 20 }
//   ];

//   return (

//     <div className='total-1-164'>
//       <div className='header-721'>
//         <Header />
//       </div>
//     <div className='total-221'>
      
//        <div className='side-bar-latest-1121'>
//         <Sidebar />
//       </div>
//     <div className="dashboard">
     
//       <div className="dashboard-header">
      
//         <h1>Categories <LogoutButton /></h1>
//         <button className="add-category-btn">+ Add Category</button>
//       </div>
//       <div className="categories-grid">
//         {categories.map(category => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Dashboard;