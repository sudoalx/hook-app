import { useCounter } from "../hooks";
import { useMemo, useState } from "react";

const heavyStuff = (interationNum = 100) => {
  for (let i = 0; i < interationNum; i++) {
    console.log("Here we go...");
  }
  return `Iterations: ${interationNum}`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(40);
  const [show, setShow] = useState(true);

  const memoValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter:<small> {counter} </small>
      </h1>
      <hr />
      <h4>{memoValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
