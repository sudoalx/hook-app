import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("I was called on re-render :(");
  return <small>{value}</small>;
});
