import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Component mounted");
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
