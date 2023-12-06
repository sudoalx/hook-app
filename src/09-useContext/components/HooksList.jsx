import { Link } from "react-router-dom";
export const HooksList = () => {
  const ghRepo = "https://github.com/sudoalx/hook-app/tree/main/src/";
  return (
    <div className="container">
      <h1 className="display-1">List of React Hooks in this app</h1>
      <ul className="list">
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/01-useState/CounterApp.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/useState1">
            useState1
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/01-useState/CounterWithCustomHook.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/useState2">
            useState2
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/02-useEffect/SimpleForm.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/SimpleForm">
            SimpleForm
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/02-useEffect/CustomHookForm.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/CustomHookForm">
            CustomHookForm
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/03-examples/MultipleCustomHooks.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/MultipleCustomHooks">
            MultipleCustomHooks
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/04-useRef/FocusScreen.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/FocusScreen">
            FocusScreen
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/05-useLayoutEffect/Layout.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/Layout">
            Layout
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/06-memos/Memorize.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/Memorize">
            Memorize
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/06-memos/MemorizeWithUseCallbackHook.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/MemoHook">
            MemoHook
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/06-memos/CallbackHook.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/CallbackHook">
            CallbackHook
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/07-homework-memo/Parent.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/Parent">
            Parent
          </Link>
        </li>
        <li className="lead text-start fst-italic">
          Source:{" "}
          <a
            className="text-decoration-none"
            href={ghRepo + "/08-useReducer/TodoApp.jsx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          Demo:{" "}
          <Link className="text-decoration-none" to="/TodoApp">
            TodoApp
          </Link>
        </li>
      </ul>
    </div>
  );
};
