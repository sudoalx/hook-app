import React from "react";
import PropTypes from "prop-types";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("ShowIncrement rendered");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      +1
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
