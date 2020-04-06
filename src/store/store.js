import { combineReducers, createStore } from "redux";
import { visibilityFilterReducer } from "./reducers/visibility-filter.reducer";
import { todoListReducer } from "./reducers/todo-list.reducer";


const store = createStore(combineReducers({
    visibility: visibilityFilterReducer,
    todoListUpdate: todoListReducer
}));
export default store;
