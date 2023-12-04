import PropTypes from "prop-types";
export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
        >
          <span>{todo.description}</span>
          <button className="btn btn-danger">Delete</button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
