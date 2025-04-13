// src/store/authSlice.js

// src/store/authSlice.js

// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: localStorage.getItem('userInfo') 
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    loading: false,
    error: null
  },
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setCredentials, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     userInfo: localStorage.getItem('userInfo') 
//       ? JSON.parse(localStorage.getItem('userInfo'))
//       : null,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       state.userInfo = action.payload;
//       localStorage.setItem('userInfo', JSON.stringify(action.payload));
//     },
//     // Add the logout reducer here
// //     logout: (state) => {
// //       state.userInfo = null;
// //       localStorage.removeItem('userInfo');
// //     }
// //   }
// // });


// logout: (state) => {
//     state.userInfo = null;
//     localStorage.removeItem('userInfo');
//     localStorage.removeItem('otherAuthData'); // Clear any additional items
//     // Add any other cleanup here
//   }
// }
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     userInfo: localStorage.getItem('userInfo') 
//       ? JSON.parse(localStorage.getItem('userInfo'))
//       : null,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       state.userInfo = action.payload;
//       localStorage.setItem('userInfo', JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.userInfo = null;
//       localStorage.removeItem('userInfo');
//     }
//   }
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;