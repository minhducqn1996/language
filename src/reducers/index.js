import { languageReducer } from "./changeLang";

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    changeLanguage: languageReducer,
})

export default rootReducer;