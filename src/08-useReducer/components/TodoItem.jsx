import PropTypes from "prop-types";

export const TodoItem = ({ todo }) => {
  const { id, description } = todo;

  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
    >
      <span>{description}</span>
      <button className="btn btn-danger">Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
