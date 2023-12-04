import PropTypes from "prop-types";
import { useState } from "react";

export const TodoAdd = ({ handleNewTodo }) => {
  const [description, setDescription] = useState("");
  return (
    <form>
      <input
        type="text"
        name="todo"
        className="form-control mb-2 bg-dark text-white"
        autoComplete="off"
        placeholder="New Todo..."
        onChange={({ target }) => {
          setDescription(target.value);
        }}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        onClick={(e) => {
          e.preventDefault();
          if (description.trim().length <= 1) return;
          const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
          };
          handleNewTodo(newTodo);
        }}
      >
        Add
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  handleNewTodo: PropTypes.func.isRequired,
};
