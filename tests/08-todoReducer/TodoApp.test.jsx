import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks";

jest.mock("../../src/hooks/useTodos");

describe("tests for <TodoApp/> component", () => {
  useTodos.mockReturnValue({
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodoStatus: jest.fn(),
    todos: [
      { id: 1, description: "Collect Soul Stone", done: false },
      { id: 2, description: "Collect Power Stone", done: true },
    ],
    pendingTodos: 1,
    completedTodos: 1,
  });

  test("should show the component correctly", () => {
    render(<TodoApp />);
    expect(screen.getByText("Collect Soul Stone")).toBeTruthy();
    expect(screen.getByText("Collect Power Stone")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
