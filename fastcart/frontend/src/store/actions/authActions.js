// src/store/actions/authActions.js

// In your authActions.js

import axios from 'axios';
import { setCredentials } from '../authSlice'; // Corrected import path

export const register = (username, email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/auth/register',
      { username, email, password },
      config
    );

    dispatch(setCredentials(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    throw new Error(message);
  }
};




// export const register = (username, email, password) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // This is crucial for cookies
//     };

//     const { data } = await axios.post(
//       `${process.env.REACT_APP_API_BASE_URL}/api/auth/register`,
//       { username, email, password },
//       config
//     );

//     dispatch({
//       type: USER_REGISTER_SUCCESS,
//       payload: data,
//     });

//     // Dispatch login after successful registration
//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });

//     // Store user info in localStorage if needed
//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };



// import axios from 'axios';
// import { setCredentials } from '../authSlice'; // Corrected import path

// export const register = (username, email, password) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       '/api/auth/register',
//       { username, email, password },
//       config
//     );

//     dispatch(setCredentials(data));
//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     throw new Error(message);
//   }
// };


// import axios from 'axios';
// import {
//   USER_LOGIN_REQUEST,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_FAIL,
//   USER_LOGOUT,
//   USER_REGISTER_REQUEST,
//   USER_REGISTER_SUCCESS,
//   USER_REGISTER_FAIL,
// } from '../constants/authConstants';

// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       '/api/auth/login',
//       { email, password },
//       config
//     );

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const logout = () => (dispatch) => {
//   localStorage.removeItem('userInfo');
//   dispatch({ type: USER_LOGOUT });
// };

// export const register = (username, email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_REGISTER_REQUEST });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       '/api/auth/register',
//       { username, email, password },
//       config
//     );

//     dispatch({
//       type: USER_REGISTER_SUCCESS,
//       payload: data,
//     });

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
