import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getLibsReducers(state = initialState.libs, action) {
  switch (action.type) {
    case actionTypes.LIBS:
      const isTrue = state.filter((payload) => payload === action.payload);
      if (isTrue.length > 0) {
        return state.filter((payload) => payload !== action.payload);
      } else {
        return [...state, action.payload];
      }

    default:
      return state;
  }
}
