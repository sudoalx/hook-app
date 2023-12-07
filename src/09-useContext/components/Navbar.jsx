import propTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ pageName, base }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          {pageName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={base + "/login"}>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} to={base + "/about"}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pageName: propTypes.string,
  base: propTypes.string,
};

Navbar.defaultProps = {
  pageName: "Hooks App",
  base: "/",
};
