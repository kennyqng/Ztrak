import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../context/auth";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        ZTrak
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className={
                window.location.pathname === "/admin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
