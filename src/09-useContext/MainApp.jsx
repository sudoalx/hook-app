import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, FourOhFour } from "./";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar pageName={"useContext App"} base={"/useContext"} />
      <hr />
      <Routes>
        <Route path="/useContext" element={<HomePage />} />
        <Route path="/useContext/about" element={<AboutPage />} />
        <Route path="/useContext/login" element={<LoginPage />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </UserProvider>
  );
};
