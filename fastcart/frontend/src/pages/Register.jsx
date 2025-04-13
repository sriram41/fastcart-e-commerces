// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../store/actions/authActions';
// import { toast } from 'react-toastify';
// import './styles.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo, error: authError } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/dashboard');
//     }
    
//     if (authError) {
//       toast.error(authError);
//     }
//   }, [userInfo, navigate, authError]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     } else if (formData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setLoading(true);
//     try {
//       await dispatch(register(formData.username, formData.email, formData.password));
      
//       // Check if registration was successful
//       const { userInfo } = useSelector((state) => state.auth);
//       if (userInfo) {
//         toast.success('Registration successful!');
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       toast.error(error.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       {/* ... rest of your JSX remains the same ... */}
//     </div>
//   );
// };

// export default Register;









import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/actions/authActions';
import { toast } from 'react-toastify';
import './styles.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, error: authError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
    
    if (authError) {
      toast.error(authError);
    }
  }, [userInfo, navigate, authError]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await dispatch(register(formData.username, formData.email, formData.password));
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2 className="auth-title">Create a new account</h2>
      </div>

      <div className="auth-card">
        <div className="auth-card-inner">
          <form className="auth-form" onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`form-input ${errors.username ? 'form-input-error' : ''}`}
                />
                {errors.username && (
                  <p className="error-message">{errors.username}</p>
                )}
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
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
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'form-input-error' : ''}`}
                />
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`submit-button ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering...
                  </>
                ) : 'Register'}
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
              Already have an account?{' '}
              <Link
                to="/login"
                className="auth-link"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { register } from '../store/actions/authActions';
// // import { toast } from 'react-toastify';

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: ''
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { userInfo, error: authError } = useSelector((state) => state.auth);

// //   useEffect(() => {
// //     if (userInfo) {
// //       navigate('/dashboard');
// //     }
    
// //     if (authError) {
// //       toast.error(authError);
// //     }
// //   }, [userInfo, navigate, authError]);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
    
// //     if (!formData.username.trim()) {
// //       newErrors.username = 'Username is required';
// //     } else if (formData.username.length < 3) {
// //       newErrors.username = 'Username must be at least 3 characters';
// //     }
    
// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = 'Please enter a valid email';
// //     }
    
// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     } else if (formData.password.length < 6) {
// //       newErrors.password = 'Password must be at least 6 characters';
// //     }
    
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const submitHandler = async (e) => {
// //     e.preventDefault();
    
// //     if (!validateForm()) return;
    
// //     setLoading(true);
// //     try {
// //       await dispatch(register(formData.username, formData.email, formData.password));
// //       toast.success('Registration successful!');
// //     } catch (error) {
// //       toast.error(error.message || 'Registration failed');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
// //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //           Create a new account
// //         </h2>
// //       </div>

// //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
// //           <form className="space-y-6" onSubmit={submitHandler}>
// //             <div>
// //               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// //                 Username
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="username"
// //                   name="username"
// //                   type="text"
// //                   required
// //                   value={formData.username}
// //                   onChange={handleChange}
// //                   className={`appearance-none block w-full px-3 py-2 border ${errors.username ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
// //                 />
// //                 {errors.username && (
// //                   <p className="mt-1 text-sm text-red-600">{errors.username}</p>
// //                 )}
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                 Email address
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   required
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
// //                 />
// //                 {errors.email && (
// //                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
// //                 )}
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
// //                   autoComplete="current-password"
// //                   required
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className={`appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
// //                 />
// //                 {errors.password && (
// //                   <p className="mt-1 text-sm text-red-600">{errors.password}</p>
// //                 )}
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
// //                   loading ? 'opacity-50 cursor-not-allowed' : ''
// //                 }`}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     Registering...
// //                   </>
// //                 ) : 'Register'}
// //               </button>
// //             </div>
// //           </form>

// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300" />
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">Or</span>
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <p className="text-center text-sm text-gray-600">
// //                 Already have an account?{' '}
// //                 <Link
// //                   to="/login"
// //                   className="font-medium text-indigo-600 hover:text-indigo-500"
// //                 >
// //                   Login here
// //                 </Link>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { register } from '../store/actions/authActions';

// // const Register = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { userInfo } = useSelector((state) => state.auth);

// //   useEffect(() => {
// //     if (userInfo) {
// //       navigate('/dashboard');
// //     }
// //   }, [userInfo, navigate]);

// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     dispatch(register(username, email, password));
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
// //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //           Create a new account
// //         </h2>
// //       </div>

// //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
// //           <form className="space-y-6" onSubmit={submitHandler}>
// //             <div>
// //               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// //                 Username
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="username"
// //                   name="username"
// //                   type="text"
// //                   required
// //                   value={username}
// //                   onChange={(e) => setUsername(e.target.value)}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                 Email address
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   required
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
// //                   autoComplete="current-password"
// //                   required
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //               >
// //                 Register
// //               </button>
// //             </div>
// //           </form>

// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300" />
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">Or</span>
// //               </div>
// //             </div>

// //             <div className="mt-6">
// //               <p className="text-center text-sm text-gray-600">
// //                 Already have an account?{' '}
// //                 <Link
// //                   to="/login"
// //                   className="font-medium text-indigo-600 hover:text-indigo-500"
// //                 >
// //                   Login here
// //                 </Link>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
