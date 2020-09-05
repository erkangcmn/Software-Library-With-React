import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function getLibsReducers(state = initialState.libs, action) {
    switch (action.type) {
        case actionTypes.LIBS:
            return [...state, action.payload];
        case actionTypes.REMOVE_LIBS:
            return state.filter(payload => payload !== action.payload)

        default:
            return state;
    }
}