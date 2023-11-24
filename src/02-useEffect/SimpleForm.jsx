import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    console.log("Form changed");
  }, [formState]);

  useEffect(() => {
    console.log("Username changed");
  }, [username]);

  useEffect(() => {
    console.log("Email changed");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <form action="">
        <label htmlFor="username" className="form-label mt-2 mb-0 pb-0 d-block">
          Enter the username you want to use
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
        <label htmlFor="name" className="form-label mt-2 mb-0 pb-0 d-block">
          Enter your name
        </label>
        <input
          type="text"
          name="name"
          className="form-control mt-2"
          placeholder="Name"
        />
        <label htmlFor="lastname" className="form-label mt-2 mb-0 pb-0 d-block">
          Enter your lastname
        </label>
        <input
          type="text"
          name="lastname"
          className="form-control mt-2"
          placeholder="Lastname"
        />
        <label htmlFor="password" className="form-label mt-2 mb-0 pb-0 d-block">
          Enter your password
        </label>
        <input
          type="password"
          name="password"
          className="form-control mt-2"
          placeholder="Password"
        />
        <label
          htmlFor="password2"
          className="form-label mt-2 mb-0 pb-0 d-block"
        >
          Confirm your password
        </label>
        <input
          type="password"
          name="password2"
          className="form-control mt-2"
          placeholder="Confirm password"
        />
        <hr />
        <button type="submit" className="btn btn-primary mt-2">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SimpleForm;
