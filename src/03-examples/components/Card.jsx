import PropTypes from "prop-types";
import { SkipValues } from "./SkipValues";

export const Card = ({
  image,
  name,
  species,
  decrement,
  increment,
  counter,
  isLoading,
  increaseValue,
  decreaseValue,
  setIncreaseValue,
  setDecreaseValue,
}) => {
  const handleDeacreaseValue = (e) => {
    e.target.value > 0 && setDecreaseValue(parseInt(e.target.value));
  };
  const handleIncreaseValue = (e) => {
    e.target.value > 0 && setIncreaseValue(parseInt(e.target.value));
  };
  return (
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
            Current character:
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

      <SkipValues
        decreaseValue={decreaseValue}
        increaseValue={increaseValue}
        setDecreaseValue={handleDeacreaseValue}
        setIncreaseValue={handleIncreaseValue}
      />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  increaseValue: PropTypes.number.isRequired,
  decreaseValue: PropTypes.number.isRequired,
  setIncreaseValue: PropTypes.func.isRequired,
  setDecreaseValue: PropTypes.func.isRequired,
};
