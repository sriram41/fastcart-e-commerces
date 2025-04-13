// src/store/store.js
// src/store/store.js

// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './authSlice';
import { categoryReducer } from './reducers/categoryReducer';

const reducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { thunk } from 'redux-thunk';  // Correct import syntax
// import authReducer from './authSlice';
// import { categoryReducer } from './reducers/categoryReducer';

// const reducer = combineReducers({
//   auth: authReducer,
//   category: categoryReducer,
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware().concat(thunk),  // Now using the named export
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from './authSlice'; // Add this import
// import { categoryReducer } from './reducers/categoryReducer';

// const reducer = combineReducers({
//   auth: authReducer, // This will replace your existing authReducer
//   category: categoryReducer,
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { thunk } from 'redux-thunk';  // Changed import
// import { authReducer } from './reducers/authReducer';
// import { categoryReducer } from './reducers/categoryReducer';

// const reducer = combineReducers({
//   auth: authReducer,
//   category: categoryReducer,
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware().concat(thunk),  // Use the named import
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { authReducer } from './reducers/authReducer';
// import { categoryReducer } from './reducers/categoryReducer';

// const reducer = combineReducers({
//   auth: authReducer,
//   category: categoryReducer,
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from './reducers/authReducer';
// import categoryReducer from './reducers/categoryReducer';

// const reducer = combineReducers({
//   auth: authReducer,
//   category: categoryReducer,
// });

// const store = configureStore({
//   reducer,
//   middleware: [thunk],
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;


