import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import HooksApp from "./HooksApp";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
import SimpleForm from "./02-useEffect/SimpleForm";
import CustomHookForm from "./02-useEffect/CustomHookForm";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import Layout from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Parent } from "./07-homework-memo/Parent";
// import "./08-useReducer/intro-reducer";

import { TodoApp } from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <CustomHookForm /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Parent /> */}
    <TodoApp />
  </React.Fragment>
);
