export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={`todo${index}`}>{todo.text}</li>;
      })}
    </ul>
  );
}
