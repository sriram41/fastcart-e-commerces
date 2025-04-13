import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
} from '../constants/categoryConstants';

export const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CREATE_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, categories: [...state.categories, action.payload] };
    case CATEGORY_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CATEGORY_UPDATE_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return {
        loading: false,
        categories: state.categories.map((category) =>
          category._id === action.payload._id ? action.payload : category
        ),
      };
    case CATEGORY_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CATEGORY_DELETE_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_DELETE_SUCCESS:
      return {
        loading: false,
        categories: state.categories.filter(
          (category) => category._id !== action.payload
        ),
      };
    case CATEGORY_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};



// import {
//     CATEGORY_LIST_REQUEST,
//     CATEGORY_LIST_SUCCESS,
//     CATEGORY_LIST_FAIL,
//     CATEGORY_CREATE_REQUEST,
//     CATEGORY_CREATE_SUCCESS,
//     CATEGORY_CREATE_FAIL,
//     CATEGORY_UPDATE_REQUEST,
//     CATEGORY_UPDATE_SUCCESS,
//     CATEGORY_UPDATE_FAIL,
//     CATEGORY_DELETE_REQUEST,
//     CATEGORY_DELETE_SUCCESS,
//     CATEGORY_DELETE_FAIL,
//   } from '../constants/categoryConstants';
  
//   export const categoryReducer = (state = { categories: [] }, action) => {
//     switch (action.type) {
//       case CATEGORY_LIST_REQUEST:
//         return { loading: true, categories: [] };
//       case CATEGORY_LIST_SUCCESS:
//         return { loading: false, categories: action.payload };
//       case CATEGORY_LIST_FAIL:
//         return { loading: false, error: action.payload };
//       case CATEGORY_CREATE_REQUEST:
//         return { ...state, loading: true };
//       case CATEGORY_CREATE_SUCCESS:
//         return { loading: false, categories: [...state.categories, action.payload] };
//       case CATEGORY_CREATE_FAIL:
//         return { ...state, loading: false, error: action.payload };
//       case CATEGORY_UPDATE_REQUEST:
//         return { ...state, loading: true };
//       case CATEGORY_UPDATE_SUCCESS:
//         return {
//           loading: false,
//           categories: state.categories.map((category) =>
//             category._id === action.payload._id ? action.payload : category
//           ),
//         };
//       case CATEGORY_UPDATE_FAIL:
//         return { ...state, loading: false, error: action.payload };
//       case CATEGORY_DELETE_REQUEST:
//         return { ...state, loading: true };
//       case CATEGORY_DELETE_SUCCESS:
//         return {
//           loading: false,
//           categories: state.categories.filter(
//             (category) => category._id !== action.payload
//           ),
//         };
//       case CATEGORY_DELETE_FAIL:
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };