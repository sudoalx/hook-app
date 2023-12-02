import PropTypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
  console.log("ShowIncrement rendered");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      +1
    </button>
  );
};

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
