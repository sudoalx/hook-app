import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, FourOhFour } from "./";
import { Navbar } from "./components/Navbar";

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </>
  );
};
