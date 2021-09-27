export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_PRODUCTS = "SET_CURRENT_USER_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const SET_USERS = "SET_USERS";
export const SET_SEARCH_LOCATION = "SET_SEARCH_LOCATION";
export const SET_LOCATION_SORTED_PRODUCTS = "SET_LOCATION_SORTED_PRODUCTS";
export const SET_SORTING_DISTANCE = "SET_SORTING_DISTANCE";

export const toggleIsFetching = (value) => {
  return { type: TOGGLE_IS_FETCHING, payload: value };
};

export const setCurrentUser = (value) => {
  return { type: SET_CURRENT_USER, payload: value };
};

export const setCurrentUserProducts = (value) => {
  return { type: SET_CURRENT_USER_PRODUCTS, payload: value };
};

export const setProducts = (value) => {
  return { type: SET_PRODUCTS, payload: value };
};

export const setActiveCategory = (value) => {
  return { type: SET_ACTIVE_CATEGORY, payload: value };
};

export const setUsers = (value) => {
  return { type: SET_USERS, payload: value };
};

export const setSearchLocation = (value) => {
  return { type: SET_SEARCH_LOCATION, payload: value };
};

export const setLocationSortedProducts = (value) => {
  return { type: SET_LOCATION_SORTED_PRODUCTS, payload: value };
};

export const setSortingDistance = (value) => {
  return { type: SET_SORTING_DISTANCE, payload: value };
};
