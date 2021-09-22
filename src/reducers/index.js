import { TOGGLE_IS_FETCHING, SET_CURRENT_USER } from "../actions";

const initialState = {
  isFetching: false,
  currentUser: null,
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
    default:
      return state;
  }
};

export default reducer;
