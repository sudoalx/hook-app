import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { HooksList } from "./components/HooksList";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />
      <HooksList />
    </>
  );
};
