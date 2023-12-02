import React, { useCallback, useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const nums = [2, 4, 6, 8, 10, 100];
  const [value, setValue] = useState(0);

  const increase = useCallback((num) => {
    setValue((value) => value + num);
  }, []);

  return (
    <div>
      <h1>Parent component</h1>
      <p> Total: {value} </p>

      <hr />

      {nums.map((n) => (
        <Child key={n} num={n} increase={increase} />
      ))}
    </div>
  );
};
