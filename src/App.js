import { useEffect, useState } from "react";
import "./App.css";
import { addTodo } from "./redux/actions";
import store from "./redux/store";

function App({ store }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className="App">
      {JSON.stringify(state)}
      <button onClick={click}>추가</button>
    </div>
  );
}

function click() {
  store.dispatch(addTodo("HTML"));
}

export default App;
