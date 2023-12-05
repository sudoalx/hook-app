import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos, onRemoveTodo, onToggleTodoStatus }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onToggleTodoStatus={onToggleTodoStatus}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodoStatus: PropTypes.func.isRequired,
};
