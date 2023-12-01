export const Small = ({ value }) => {
  console.log("I was called on re-render :(");
  return <small>{value}</small>;
};
