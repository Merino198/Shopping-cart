import * as types from "../constants/ActionType";

const initialState = "";

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER:
        return action.filter;
    default:
        return state;
  }
};

export default myReducer;
