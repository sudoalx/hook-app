import PropTypes from "prop-types";
export const SkipValues = ({
  increaseValue,
  decreaseValue,
  setIncreaseValue,
  setDecreaseValue,
}) => {
  return (
    <div className="d-grid gap-1 m-1 text-center">
      <label htmlFor="decrementBy" className="form-label">
        Skip Forward
      </label>
      <input
        type="number"
        className="form-control text-center"
        id="decrementBy"
        value={increaseValue}
        onChange={(e) => {
          setIncreaseValue(e);
        }}
      />

      <label htmlFor="incrementBy" className="form-label">
        Skip Backward
      </label>
      <input
        type="number"
        className="form-control text-center"
        id="incrementBy"
        value={decreaseValue}
        onChange={(e) => {
          setDecreaseValue(e);
        }}
      />
    </div>
  );
};

SkipValues.propTypes = {
  increaseValue: PropTypes.number.isRequired,
  decreaseValue: PropTypes.number.isRequired,
  setIncreaseValue: PropTypes.func.isRequired,
  setDecreaseValue: PropTypes.func.isRequired,
};
