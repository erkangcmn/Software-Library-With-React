import {combineReducers} from "redux"
import arrDataReducers from "./arrReducers"
import languageReducers from "./languageReducers"
import isTrueReducers from "./isTrueReducers"
import getNameReducers from "./getNameReducers"
import getLibsReducers from "./getLibsReducers"

const rootReducer = combineReducers({
    arrDataReducers,
    languageReducers,
    isTrueReducers,
    getNameReducers,
    getLibsReducers

})

export default rootReducer