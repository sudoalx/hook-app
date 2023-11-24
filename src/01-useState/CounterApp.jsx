import { useState } from "react";

const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button
        type="button"
        className="btn btn-warning"
        onClick={() =>
          setCounter({
            counter1: counter1 - 1,
            counter2: counter2 + 1,
            counter3: counter3 - 1,
          })
        }
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() =>
          setCounter({
            ...state,
            counter1: 10,
            counter2: 20,
            counter3: 30,
          })
        }
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() =>
          setCounter({
            counter1: counter1 + 1,
            counter2: counter2 - 1,
            counter3: counter3 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
