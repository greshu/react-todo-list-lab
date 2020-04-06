import { combineReducers, createStore } from "redux";
import { visibilityFilterReducer } from "./reducers/visibility-filter.reducer"


const store = createStore(combineReducers({
    visibilityFilterReducer
}));
export default store;
