import * as actionTypes from "./types";

export const increment = (value) => {
  return {
    type: actionTypes.INCREMENT,
    payload: {
      value: value,
    },
  };
};

export const decrement = (value) => {
  return {
    type: actionTypes.DECREMENT,
    payload: {
      value: value,
    },
  };
};
