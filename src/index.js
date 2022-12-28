import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { addTodo } from "./redux/actions";

// console.log(store);

// console.log(store.getState()); => []

// store.dispatch(addTodo("HTML"));

// console.log(store.getState()); => ["HTML"]

// store.subscribe(() => {
//   console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("HTML"));
//  => ["HTML"]
store.dispatch(addTodo("CSS"));
// => ["HTML", "CSS"]
unsubscribe();
store.dispatch(addTodo("JavaScript"));

// console.log(store.getState()); unsubscribe했지만 store에는 JavaScript가 들어가있다.(변경됨)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
