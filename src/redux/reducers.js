import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";
import { combineReducers } from "redux";

// state = [{text:'HTML', done:false},{text:'CSS', done:false},];
// state = {todos:[{text:'HTML', done:false},{text:'CSS', done:false},], filter:'ALL'}

const initialState = { todos: [], filter: "ALL" };
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default reducer;

function todosReducer(previousState = todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }
  // previousState.push()를 사용할경우, redux가 변경을 알아보기 어렵다.

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }
  return previousState;
}
function filterReducer(previousState = filterInitialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}
