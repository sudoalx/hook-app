import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import { useState } from "react";

const MultipleCustomHooks = () => {
  const max = 826;
  const { counter, increment, decrement } = useCounter(1, max);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, species, image } = !!data && data;

  const [increaseValue, setIncreaseValue] = useState(1);
  const [decreaseValue, setDecreaseValue] = useState(1);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />
      {hasError && (
        <div className="alert alert-danger" role="alert">
          Error: {hasError.message}
        </div>
      )}
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "80vh" }}
        >
          <div className="card text-center mx-auto">
            <img src={image} className="card-img-top img-fluid" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{species}</p>
            </div>
            <div className="d-grid gap-1 m-1">
              <button
                className="btn btn-primary"
                type="button"
                disabled={isLoading}
                onClick={() => decrement(decreaseValue)}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                type="button"
                disabled={isLoading}
                onClick={() => increment(increaseValue)}
              >
                Next
              </button>
              <label htmlFor="counter" className="form-label">
                Current counter value
              </label>
              <input
                type="number"
                className="form-control text-center"
                id="counter"
                value={counter}
                readOnly
              />
            </div>
          </div>
          <div className="d-grid gap-1 m-1 text-center">
            <label htmlFor="counter" className="form-label">
              Increment by
            </label>
            <input
              type="number"
              className="form-control text-center"
              id="counter"
              value={increaseValue}
              onChange={(e) => {
                e.target.value > 0 &&
                  setIncreaseValue(parseInt(e.target.value));
              }}
            />

            <label htmlFor="counter" className="form-label">
              Decrement by
            </label>
            <input
              type="number"
              className="form-control text-center"
              id="counter"
              value={decreaseValue}
              onChange={(e) => {
                e.target.value > 0 &&
                  setDecreaseValue(parseInt(e.target.value));
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MultipleCustomHooks;
