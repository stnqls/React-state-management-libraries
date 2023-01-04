import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";

const reducer = combineReducers({
  todos: todos,
  filter: filter,
  users: users,
});

export default reducer;
