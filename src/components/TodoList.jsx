import useReduxState from "../hooks/useReduxState";

export default function TodoList() {
  const state = useReduxState();

  return (
    <ul>
      {state.todos.map((todo, index) => {
        return <li key={`todo${index}`}>{todo.text}</li>;
      })}
    </ul>
  );
}
