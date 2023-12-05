import { useCounter } from "../hooks";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <div className="container text-center">
        <h1 className="display-4">Counter with Hook: {counter}</h1>
      </div>
      <hr />
      <div className="container text-center">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => decrement(1)}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => reset(1)}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => increment(1)}
          >
            +1
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterWithCustomHook;
