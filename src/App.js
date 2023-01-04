import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div className="App">
      <UserListContainer />
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}

export default App;
