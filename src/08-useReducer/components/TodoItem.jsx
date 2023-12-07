import PropTypes from "prop-types";

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodoStatus }) => {
  const { id, description, done } = todo;

  return (
    <li
      key={id}
      style={{ cursor: "pointer" }}
      onClick={() => onToggleTodoStatus(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onToggleTodoStatus(id);
        }
      }}
      tabIndex={0}
      className={`list-group-item d-flex justify-content-between align-items-center bg-dark text-white`}
    >
      <span
        className={`text-decoration-${done ? "line-through" : "none"}`}
        aria-label="description"
      >
        {description}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-danger"
          onClick={() => onRemoveTodo?.(id)}
          aria-label="remove"
        >
          🗑
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodoStatus: PropTypes.func.isRequired,
};
