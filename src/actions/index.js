export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const toggleIsFetching = (value) => {
  return { type: TOGGLE_IS_FETCHING, payload: value };
};

export const setCurrentUser = (value) => {
  return { type: SET_CURRENT_USER, payload: value };
};
