import PropTypes from "prop-types";

export const TodoItem = ({ todo, onRemoveTodo }) => {
  const { id, description } = todo;

  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
    >
      <span>{description}</span>
      <div className="btn-group">
        <button className="btn btn-success">🗸</button>
        <button className="btn btn-danger" onClick={() => onRemoveTodo(id)}>
          ⛌
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
