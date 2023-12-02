import React from "react";
import PropTypes from "prop-types";

export const Child = ({ num, increase }) => {
  console.log("Child component rendered");

  return (
    <button className="btn btn-primary m-1" onClick={() => increase(num)}>
      {num}
    </button>
  );
};

Child.propTypes = {
  num: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
};
