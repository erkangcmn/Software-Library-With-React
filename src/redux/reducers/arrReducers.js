import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function arrDataReducers(state = initialState.DataArr, action) {
    switch (action.type) {
        case actionTypes.DATAARR:
            return action.payload;

        default:
            return state;
    }
}