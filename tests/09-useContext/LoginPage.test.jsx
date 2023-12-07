import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

jest.mock("../../src/09-useContext/context/UserContext");

describe("tests on <LoginPage/>", () => {
  const user = {
    id: 1,
    name: "Alexander",
    email: "alex@sudoalex.dev",
  };

  test("should show component without the user name", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user: null }}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call setUser when clicking the button", () => {
    const setUserMock = jest.fn();

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const button = screen.getByLabelText("set-user");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      uuid: 123,
      name: "Alex",
      email: "alex@alex-dev.me",
    });
  });

  test("should show component with the user name", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user }}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});
