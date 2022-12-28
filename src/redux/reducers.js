import { ADD_TODO } from "./actions";

// state = ['a','b'];

const initialState = [];

function todoApp(previousState = initialState, action) {
  // 초기값 설정하기
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }
  // previousState.push()를 사용할경우, redux가 변경을 알아보기 어렵다.

  return previousState;
}
