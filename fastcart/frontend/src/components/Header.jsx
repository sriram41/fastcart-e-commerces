import React, { useState, useEffect } from 'react';
import { FiSearch, FiMessageSquare, FiBell, FiX, FiChevronDown } from 'react-icons/fi';
import './Header.css';

// Sample category data
const categories = [
  { id: 1, name: 'Electronics', items: ['Smartphones', 'Laptops', 'Headphones'] },
  { id: 2, name: 'Fashion', items: ['Men\'s Clothing', 'Women\'s Clothing', 'Accessories'] },
  { id: 3, name: 'Home & Kitchen', items: ['Furniture', 'Cookware', 'Decor'] },
  { id: 4, name: 'Beauty', items: ['Skincare', 'Makeup', 'Haircare'] },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const isAuthenticated = true;
  const userName = "Randhir kumar";
  const userInitial = userName.charAt(0);

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories([]);
      return;
    }

    const filtered = categories.map(category => {
      const filteredItems = category.items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);

    setFilteredCategories(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredCategories([]);
    setShowSearchResults(false);
  };

  return (
    <header className="header">
      <div className="header-container">
 <img className='logo-1212' src='/assets/logo-2.png' alt="logo" />
        {/* Search Bar with Category Filtering */}
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowSearchResults(true)}
            />
            {searchQuery && (
              <button className="clear-button" onClick={clearSearch}>
                <FiX className="clear-icon" />
              </button>
            )}
            <button className="search-button">
              <FiSearch className="search-icon" />
            </button>
          </div>

          {/* Search Results Dropdown */}
          {showSearchResults && filteredCategories.length > 0 && (
            <div className="search-results">
              {filteredCategories.map(category => (
                <div key={category.id} className="category-section">
                  <h4 className="category-title">{category.name}</h4>
                  <ul className="items-list">
                    {category.items.map((item, index) => (
                      <li key={index} className="item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side Icons */}
        <div className="right-section">
          {isAuthenticated ? (
            <>
              <button className="icon-button">
                <FiMessageSquare className="header-icon" />
               
              </button>
              
              <button className="icon-button">
                <FiBell className="header-icon" />
                <span className="badge">5</span>
              </button>
              
              <div className="user-profile">
                <div className="user-avatar">
                  <span>{userInitial}</span>
                </div>
                <span className="user-name">{userName} <span className='arrow-1443'> <FiChevronDown className="dropdown-icon" /></span> </span>
              </div>
            </>
          ) : (
            <button className="login-button">Login</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../store/actions/authActions';
// import './Header.css'; // Make sure to create this file

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <h1 className="header-title">Admin Dashboard</h1>
//         <button
//           onClick={logoutHandler}
//           className="logout-btn"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../store/actions/authActions';
// import './Header.css'

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <header className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
//         <button
//           onClick={logoutHandler}
//           className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { LogoutIcon } from '@heroicons/react/outline';
// import { logout } from '../store/actions/authActions';

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.auth);

//   const logoutHandler = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <div className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
//             </div>
//           </div>
//           <div className="ml-6 flex items-center">
//             {userInfo && (
//               <button
//                 onClick={logoutHandler}
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <LogoutIcon className="-ml-1 mr-2 h-5 w-5" />
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;