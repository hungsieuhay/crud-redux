import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todoList/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
