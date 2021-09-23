import {
  TOGGLE_IS_FETCHING,
  SET_CURRENT_USER,
  SET_CURRENT_USER_PRODUCTS,
  SET_PRODUCTS,
} from "../actions";

const initialState = {
  isFetching: false,
  currentUser: null,
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
    default:
      return state;
  }
};

export default reducer;
