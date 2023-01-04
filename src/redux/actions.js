export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

//액션 생성함수
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return { type: SHOW_ALL };
}

export function showComplete() {
  return { type: SHOW_COMPLETE };
}

// users
export const GET_USERS_START = "GET_USERS_START"; //api 호출 시작

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // api 호출의 응답 성공

export const GET_USERS_FAIL = "GET_USERS_FAIL"; //api 호출 응답 실패

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data: data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    data: error,
  };
}
