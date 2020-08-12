import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../context/auth";
import {logout} from '../../utils/API';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () =>{
    localStorage.clear("currentUser");
    setUser(null)
    logout().then(data=> window.location.replace("/"))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        ZTrĂk
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
            ></Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li onClick={handleLogout} className="nav-item" style={{cursor: "pointer"}}>
              Log Out
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
