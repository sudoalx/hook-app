import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "sudoalex",
    email: "alex@alex-dev.me",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <label htmlFor="username" className="form-label mt-2 mb-0 pb-0 d-block">
        Enter your username
      </label>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <label htmlFor="email" className="form-label mt-2 mb-0 pb-0 d-block">
        Enter your email
      </label>
      <input
        type="email"
        name="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />
      {username === "sudoalex" && <Message />}
    </>
  );
};

export default SimpleForm;
