import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime,
    description: "Collect Soul Stone",
    done: false,
  },
  {
    id: new Date().getTime * 2,
    description: "Collect Soul Stone",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>TodoApp</h1>
      <div className="row">
        <div className="col-7">
          <h4 className="text-start">Todo: 5</h4>
          <hr />
        </div>
        <div className="col-5">
          <h4 className="text-end">Done: 5</h4>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border border-white rounded">
              <span>Item 1</span>
              <button className="btn btn-danger">Delete</button>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <form>
            <input
              type="text"
              name="todo"
              className="form-control mb-2 bg-dark text-white"
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
