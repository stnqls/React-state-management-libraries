import "./App.css";
// import { addTodo } from "./redux/actions";
// import useReduxState from "./hooks/useReduxState";
// import useReduxDispatch from "./hooks/useReduxDispatch";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  // const store = useContext(ReduxContext);

  // const [state, setState] = useState(store.getState());

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     setState(store.getState());
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [store]);

  // const state = useReduxState();
  // const dispatch = useReduxDispatch();

  return (
    <div className="App">
      {/* {JSON.stringify(state)} */}
      {/* <button onClick={click}>추가</button> */}
      <TodoList />
      <TodoForm />
    </div>
  );

  // function click() {
  //   // store.dispatch(addTodo("HTML"));
  //   dispatch(addTodo("HTML"));
  // }
}

export default App;
