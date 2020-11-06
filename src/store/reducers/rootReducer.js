import {combineReducers} from "redux";
import countryToReducer from './countryToReducer'
import cityReducer from "./cityReducer";

const allReducers = combineReducers({
    countryToReducer,
    cityReducer
})

export default allReducers
