import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { MemoryRouter } from "react-router-dom";

describe("tests on <MainApp/>", () => {
  test("should display the <HomePage/> when hitting root route /", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should display the <LoginPage/> when hitting route /Login", () => {
    render(
      <MemoryRouter initialEntries={["/useContext/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
