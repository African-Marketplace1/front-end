export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_PRODUCTS = "SET_CURRENT_USER_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";

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
