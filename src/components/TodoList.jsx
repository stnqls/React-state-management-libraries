import { connect } from "react-redux";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={`todo${index}`}>{todo.text}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
