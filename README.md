# Redux

> 상태 전부는 하나의 저장소(store) 안에 있는 객체 트리에 저장되는데, 상태 트리를 변경하는 유일한 방법은 무엇이 일어날지 서술하는 객체인 액션(action)을 보내는 것 뿐이다. 액션이 상태 트리를 어떻게 변경하맂 명시하기 위해선 리듀서(reducers)를 작성해야 한다.

## 설치하기

```
npm i redux
```

## Action

`type`만이 필수 프로퍼티이며, `type`는문자열이다.

- {type: 'TEST'} : payload없는 액션
- {type: 'TEST', params: 'hello'} : payload있는 액션

### Action Creator

함수를 통해 액션을 생성해서, 액션 객체를 리턴해준다.

```js
function 액션생성자() {
  return action;
  //return {type: " ", params: " "}
}
```

1. 액션 생성자를 통해 액션을 만들어내며 만들어낸 액션 객체를 리덕스 스토어에 보낸다.
2. 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경된다.
3. 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경된다.
4. 액션은 스토어에 보내는 일종의 인풋이다.

## Reducers

액션을 주면, 액션이 적용되어 달라진 결과를 만들어주는 순수함수.

```js
function reducer함수이름(previousState, action) {
  return newState;
}
```

액션을 받아서 `State`를 리턴하는 구조로, 인자로 들어오는 `previousState`와 리턴되는 `newState`는 다른 참조를 가지도록 해야한다.(Immutable)

## createStore

: 스토어를 만드는 함수

```js
const store = createStore(리듀서);

createStore<S>(
  reducer: Reducer<S>,
  preloadedState: S, //초기값
  enhancer?:StoreEnhancer<S>
):Store<S>
```

- `store.getState()` : 현재 상태를 가져온다.
- `store.dispatch(액션)`, `store.dispatch(액션생성자())` : store의 상태를 변경시킨다.
- `const unsubscribe = store.subscribe(()=>{})` : store에 변경이 생겼을때 함수가 실행 된다.

  - 리턴이 unsubscribe이다.
  - unsubscribe();하면 제거된다.

- `store.replaceReducer(다른 리듀서)`

## combineReducers

여러개의 서브리듀서를 하나로 합쳐준다.

```js
import { combineReducers } from "redux";

const reducer = combineReducers({
  todos,
  filter,
});

//todos : action.type = ADD_TODO, COMPLETE_TODO
//filter : action.type = SHOW_ALL, SHWO__COMPLETE
```

## react-redux

- `Privider컴포넌트`를 제공해준다.
- `connect함수` 를통해 컨테이너를 만들어준다.
  - 컨테이너 : 스토어의 `state`와 `dispatch`를 연결한 컴포넌트에 `props`로 넣어주는 역할을 한다.
-

<!-- 단일 스토어 사용 준비하기

- import redux
- 액션 정의하기
- 액션을 사용하는 리듀서 만들기
- 리듀서를 합치기
- 리듀서를 인자로 단일 스토어를 만들기 -->
