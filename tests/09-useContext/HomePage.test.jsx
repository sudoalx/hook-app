import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("tests on <HomePage/>", () => {
  const user = {
    id: 1,
    name: "Alexander",
    email: "alex@sudoalex.dev",
  };

  test("should show component without the user name", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user: null }}>
          <HomePage />
        </UserContext.Provider>
      </MemoryRouter>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should show component with the user name", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user }}>
          <HomePage />
        </UserContext.Provider>
      </MemoryRouter>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});
