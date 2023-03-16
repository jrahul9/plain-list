import { combineReducers } from "redux";
import { plainListReducer } from "./plainList/reducer";

export const rootReducers = combineReducers({
    plainList: plainListReducer
})