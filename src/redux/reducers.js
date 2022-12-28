import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";

// state = [{text:'HTML', done:false},{text:'CSS', done:false},];
// state = {todos:[{text:'HTML', done:false},{text:'CSS', done:false},], filter:'ALL'}

const initialState = { todos: [], filter: "ALL" };

export function todoApp(previousState = initialState, action) {
  // 초기값 설정하기
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [...previousState.todos, { text: action.text, done: false }],
    };
  }
  // previousState.push()를 사용할경우, redux가 변경을 알아보기 어렵다.

  if (action.type === COMPLETE_TODO) {
    return {
      ...previousState,
      todos: previousState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      }),
    };
  }

  if (action.type === SHOW_COMPLETE) {
    return {
      ...previousState,
      filter: "COMPLETE",
    };
  }

  if (action.type === SHOW_ALL) {
    return {
      ...previousState,
      filter: "ALL",
    };
  }

  return previousState;
}
