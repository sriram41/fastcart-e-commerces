// // src/App.js
// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import CategoriesPage from './pages/CategoriesPage';
// import CategoryForm from './components/CategoryForm';
// import NotFound from './pages/NotFound';
// import './index.css';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route element={<PrivateRoute />}>
//             <Route path="/" element={<Layout />}>
//               <Route index element={<Dashboard />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/categories" element={<CategoriesPage />} />
//               <Route path="/add-category" element={<CategoryForm />} />
//               <Route path="/edit-category/:id" element={<CategoryForm isEdit />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CategoriesPage from './pages/CategoriesPage';
import CategoryForm from './components/CategoryForm';
import NotFound from './pages/NotFound';
import './index.css';
import Orders from './components/Orders';
import Products from './components/Products';
import Categories from './components/Categories';
import Customers from './components/Customers';
import Reports from './components/Reports';
import Coupons from './components/Coupons';
import Inbox from './components/Inbox';
import KnowledgeBase from './components/KnowledgeBase';
import ProductUpdates from './components/ProductUpdates';
import Settings from './components/Settings';
import CategoryProductsPage from './components/CategoryProductsPage';
import SingleProductPage from './components/SingleProductPage';

function App() {
  return (
    <Provider store={store}>  
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/add-category" element={<CategoryForm />} /> 
            <Route path="/edit-category/:id" element={<CategoryForm isEdit />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/product-updates" element={<ProductUpdates />} />
          <Route path="/personal-settings" element={<Settings />} />
          <Route path="/global-settings" element={<Settings />} />
          <Route path="/categories/:categoryName" element={<CategoryProductsPage />} />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import CategoryForm from './components/CategoryForm';
// import NotFound from './pages/NotFound';
// import './index.css'; 

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Layout />
//               </PrivateRoute>
//             }
//           >
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/add-category" element={<CategoryForm />} />
//             <Route path="/edit-category/:id" element={<CategoryForm isEdit />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;