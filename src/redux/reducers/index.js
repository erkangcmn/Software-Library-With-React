import {combineReducers} from "redux"
import arrDataReducers from "./arrReducers"
import languageReducers from "./languageReducers"
import isTrueReducers from "./isTrueReducers"
import getNameReducers from "./getNameReducers"

const rootReducer = combineReducers({
    arrDataReducers,
    languageReducers,
    isTrueReducers,
    getNameReducers

})

export default rootReducer