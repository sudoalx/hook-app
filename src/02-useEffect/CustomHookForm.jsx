import Message from "./Message";
import { useForm } from "../hooks/useForm";

const CustomHookForm = () => {
  const { onInputChange, onFormReset, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Form with custom hook</h1>
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
        type="text"
        className="form-control mt-2"
        placeholder="E-mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <label htmlFor="password" className="form-label mt-2 mb-0 pb-0 d-block">
        Enter your password
      </label>
      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="Password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-danger mt-4" onClick={onFormReset}>
        Clear fields
      </button>
      {email === "sudoalex" && <Message />}
    </>
  );
};

export default CustomHookForm;
