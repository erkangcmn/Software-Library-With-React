import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getNameReducers(state = initialState.name, action) {
  switch (action.type) {
    case actionTypes.NAME:
      return action.payload;

    default:
      return state;
  }
}
