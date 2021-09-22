import { TOGGLE_IS_FETCHING } from "../actions";

const initialState = {
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
