import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime,
    description: "Collect Soul Stone",
    done: false,
  },
  {
    id: new Date().getTime * 2,
    description: "Collect Power Stone",
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
          <TodoList todos={todos} dispatchTodo={dispatchTodo} />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <TodoAdd />
        </div>
      </div>
    </>
  );
};
