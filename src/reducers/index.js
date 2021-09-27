import {
  TOGGLE_IS_FETCHING,
  SET_CURRENT_USER,
  SET_CURRENT_USER_PRODUCTS,
  SET_PRODUCTS,
  SET_ACTIVE_CATEGORY,
  SET_USERS,
  SET_SEARCH_LOCATION,
  SET_LOCATION_SORTED_PRODUCTS,
  SET_SORTING_DISTANCE,
} from "../actions";

const initialState = {
  isFetching: false,
  currentUser: null,
  activeCategory: null,
  products: [],
  users: [],
  searchLocation: null,
  locationSortedProducts: [],
  sortingDistance: null,
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
    case SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case SET_SEARCH_LOCATION: {
      return {
        ...state,
        searchLocation: action.payload,
      };
    }
    case SET_LOCATION_SORTED_PRODUCTS: {
      return {
        ...state,
        locationSortedProducts: action.payload,
      };
    }
    case SET_SORTING_DISTANCE: {
      return {
        ...state,
        sortingDistance: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
