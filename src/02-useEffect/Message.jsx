import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
      // console.log(":)");
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("Component unmounted");
    };
  }, []);
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};

export default Message;
