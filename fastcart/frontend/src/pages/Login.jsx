// src/pages/Login.jsx

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCredentials } from '../store/authSlice';
// import './styles.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/dashboard');
//     }
//   }, [userInfo, navigate]);

//   const validateForm = () => {
//     if (!email.trim()) {
//       setError('Email is required');
//       return false;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setError('Please enter a valid email');
//       return false;
//     }
//     if (!password) {
//       setError('Password is required');
//       return false;
//     }
//     return true;
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
//         method: 'POST',
//         credentials: 'include', // Required for cookies
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
      
//       const data = await response.json();
      
//       if (response.ok) {
//         dispatch(setCredentials(data));
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Login failed. Please check your credentials.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Failed to connect to server. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-header">
//         <h2 className="auth-title">fastcart sign in to your account</h2>
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       <div className="auth-card">
//         <div className="auth-card-inner">
//           <form className="auth-form" onSubmit={submitHandler}>
//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="form-input"
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="form-input"
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className={`submit-button ${loading ? 'loading' : ''}`}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <span className="spinner"></span>
//                     Signing in...
//                   </>
//                 ) : (
//                   'Sign in'
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="divider">
//             <div className="divider-line">
//               <div className="divider-line-inner"></div>
//             </div>
//             <div className="divider-text">
//               <span>Or</span>
//             </div>
//           </div>

//           <div className="auth-link-container">
//             <p className="auth-link-text">
//               Don't have an account?{' '}
//               <Link
//                 to="/register"
//                 className="auth-link"
//               >
//                 Register here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('${process.env.REACT_APP_API_BASE_URL}/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        dispatch(setCredentials(data));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2 className="auth-title">fastcart sign in to your account</h2>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="auth-card">
        <div className="auth-card-inner">
          <form className="auth-form" onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="submit-button"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="divider">
            <div className="divider-line">
              <div className="divider-line-inner"></div>
            </div>
            <div className="divider-text">
              <span>Or</span>
            </div>
          </div>

          <div className="auth-link-container">
            <p className="auth-link-text">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="auth-link"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCredentials } from '../store/authSlice';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/dashboard');
//     }
//   }, [userInfo, navigate]);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace with your actual login API call
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
      
//       const data = await response.json();
      
//       if (response.ok) {
//         dispatch(setCredentials(data));
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     // ... keep your existing JSX, just add error display if needed
    
//     // ... rest of your form
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Sign in to your account
//         </h2>
//       </div>
//       {error && <div className="text-red-500 text-sm">{error}</div>}
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={submitHandler}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or</span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <p className="text-center text-sm text-gray-600">
//                 Don't have an account?{' '}
//                 <Link
//                   to="/register"
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                   Register here
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Login;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/actions/authActions';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/dashboard');
//     }
//   }, [userInfo, navigate]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   return (
    // <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //       Sign in to your account
    //     </h2>
    //   </div>

    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6" onSubmit={submitHandler}>
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //             Email address
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               required
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //             Password
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               autoComplete="current-password"
    //               required
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <button
    //             type="submit"
    //             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           >
    //             Sign in
    //           </button>
    //         </div>
    //       </form>

    //       <div className="mt-6">
    //         <div className="relative">
    //           <div className="absolute inset-0 flex items-center">
    //             <div className="w-full border-t border-gray-300" />
    //           </div>
    //           <div className="relative flex justify-center text-sm">
    //             <span className="px-2 bg-white text-gray-500">Or</span>
    //           </div>
    //         </div>

    //         <div className="mt-6">
    //           <p className="text-center text-sm text-gray-600">
    //             Don't have an account?{' '}
    //             <Link
    //               to="/register"
    //               className="font-medium text-indigo-600 hover:text-indigo-500"
    //             >
    //               Register here
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default Login;
