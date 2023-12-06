import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, FourOhFour } from "./";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./context/UserProvider";
import CounterApp from "../01-useState/CounterApp";
import CounterWithCustomHook from "../01-useState/CounterWithCustomHook";
import SimpleForm from "../02-useEffect/SimpleForm";
import CustomHookForm from "../02-useEffect/CustomHookForm";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
import { FocusScreen } from "../04-useRef/FocusScreen";
import Layout from "../05-useLayoutEffect/Layout";
import { Memorize } from "../06-memos/Memorize";
import { MemoHook } from "../06-memos/MemoHook";
import { CallbackHook } from "../06-memos/CallbackHook";
import { Parent } from "../07-homework-memo/Parent";
import { TodoApp } from "../08-useReducer/TodoApp";
import { Footer } from "./components/Footer";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar pageName={"useContext App"} base={"/useContext"} />
      <p className="lead">
        This is a React app that demos the use of React Hooks. Source code is at{" "}
        <a href="https://github.com/sudoalx/hook-app">GitHub</a>
      </p>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useState1" element={<CounterApp />} />
        <Route path="/useState2" element={<CounterWithCustomHook />} />
        <Route path="/SimpleForm" element={<SimpleForm />} />
        <Route path="/CustomHookForm" element={<CustomHookForm />} />
        <Route path="/MultipleCustomHooks" element={<MultipleCustomHooks />} />
        <Route path="/FocusScreen" element={<FocusScreen />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/Memorize" element={<Memorize />} />
        <Route path="/MemoHook" element={<MemoHook />} />
        <Route path="/CallbackHook" element={<CallbackHook />} />
        <Route path="/Parent" element={<Parent />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/useContext/about" element={<AboutPage />} />
        <Route path="/useContext/login" element={<LoginPage />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
};
