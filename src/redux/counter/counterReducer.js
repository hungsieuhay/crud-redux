import * as actionTypes from "./types";

const initialState = {
  counter: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      state.counter = state.counter + 1;
      return { ...state };
    case actionTypes.DECREMENT:
      state.counter = state.counter - 1;
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
