import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function getLibsReducers(state = initialState.libs, action) {
    switch (action.type) {
        case actionTypes.LIBS:
            return  [action.payload];

        default:
            return state;
    }
}