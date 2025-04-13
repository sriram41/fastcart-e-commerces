// src/components/PrivateRoute.jsx
// src/components/PrivateRoute.jsx
// import React, { useEffect, useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { verifyToken } from '../../../backend/middleware/auth';
// import LoadingSpinner from './LoadingSpinner'; // Create this component
// import { useDispatch } from 'react-redux';
// import { setCredentials, logout } from '../store/authSlice';

// const PrivateRoute = () => {
//   const [authChecked, setAuthChecked] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const { valid, user } = await verifyToken();
        
//         if (valid) {
//           dispatch(setCredentials({ user, token: localStorage.getItem('userToken') }));
//         } else {
//           dispatch(logout());
//           navigate('/login', { replace: true });
//         }
//       } catch (error) {
//         dispatch(logout());
//         navigate('/login', { replace: true });
//       } finally {
//         setAuthChecked(true);
//       }
//     };

//     checkAuth();
//   }, [navigate, dispatch]);

//   if (!authChecked) {
//     return <LoadingSpinner />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;


import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  return userInfo ? <Outlet /> : null;
};

export default PrivateRoute;


// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);

//   return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;