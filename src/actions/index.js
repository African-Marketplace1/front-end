export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const toggleIsFetching = (value) => {
  return { type: TOGGLE_IS_FETCHING, payload: value };
};
