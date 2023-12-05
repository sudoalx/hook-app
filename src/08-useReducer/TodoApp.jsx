import { useTodos } from "../hooks";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const { handleNewTodo, handleRemoveTodo, handleToggleTodoStatus, todos } =
    useTodos();

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
