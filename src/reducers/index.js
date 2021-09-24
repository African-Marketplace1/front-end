import {
  TOGGLE_IS_FETCHING,
  SET_CURRENT_USER,
  SET_CURRENT_USER_PRODUCTS,
  SET_PRODUCTS,
  SET_ACTIVE_CATEGORY,
} from "../actions";

const initialState = {
  isFetching: false,
  currentUser: null,
  activeCategory: null,
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case SET_CURRENT_USER_PRODUCTS: {
      return {
        ...state,
        currentUser: { ...state.currentUser, products: action.payload },
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
