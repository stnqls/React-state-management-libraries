import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Todos from "./Pages/Todos";
// import Users from "./Pages/Users";
// import history from "./history";
import TestMocking from "./components/TestMocking";

import "./App.css";
import Counter from "./features/counter/Counter";
import Counte2 from "./components/Counter2";

function App() {
  return (
    <>
      <Counter />
      <Counte2 />
    </>
  );
}

export default App;
