import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function isTrueReducers(state = initialState.isTrue, action) {
    switch (action.type) {
        case actionTypes.ISTRUE:
            return action.payload;
        default:
            return state;
    }
}