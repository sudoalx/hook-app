import PropTypes from "prop-types";
import { useForm } from "../hooks";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, formState, onInputChange, onFormReset } = useForm({
    id: "",
    description: "",
    done: false,
  });
  return (
    <form>
      <input
        type="text"
        name="description"
        className="form-control mb-2 bg-dark text-white"
        autoComplete="off"
        placeholder="New Todo..."
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary m-1"
        onClick={(e) => {
          e.preventDefault();
          if (description.trim().length <= 1) return;
          const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
          };
          handleNewTodo(newTodo);
          onFormReset();
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
