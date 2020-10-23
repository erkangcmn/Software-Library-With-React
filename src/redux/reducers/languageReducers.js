import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function languageReducers(
  state = initialState.SelectedLanguage,
  action
) {
  switch (action.type) {
    case actionTypes.SELECTED_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
}
