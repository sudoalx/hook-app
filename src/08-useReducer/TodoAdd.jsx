import React from "react";

export const TodoAdd = () => {
  return (
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
  );
};
