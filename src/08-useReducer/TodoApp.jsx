import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

export const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };
    dispatchTodo(action);
  };

  const handleRemoveTodo = (todoId) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: todoId,
    };
    dispatchTodo(action);
  };

  const handleToggleTodoStatus = (todoId) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };
    dispatchTodo(action);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <div className="row">
        <div className="col-7">
          <h4 className="text-start text-danger">
            Pending todos: {todos.filter((todo) => !todo.done).length}
          </h4>
          <hr />
        </div>
        <div className="col-5">
          <h4 className="text-end text-success">
            Done: {todos.filter((todo) => todo.done).length}
          </h4>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodoStatus={handleToggleTodoStatus}
          />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
