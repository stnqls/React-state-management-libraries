import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Todos from "./Pages/Todos";
// import Users from "./Pages/Users";
// import history from "./history";
import TestMocking from "./components/TestMocking";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Home />} />
        <Route path="/todos" exact element={<Todos />} />
        <Route path="/users" exact element={<Users />} /> */}
        <Route path="/" exact element={<TestMocking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
