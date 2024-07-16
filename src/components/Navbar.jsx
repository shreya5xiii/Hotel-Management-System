import React from "react";
import "./style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("loggedin_user_email");
    localStorage.removeItem("loggedin_user_id");
    localStorage.removeItem("loggedin_user_name");
    location.href = "/";
  };
  return (
    <nav
      className="navbar navbar-expand-lg navshadow "
      style={{ width: "100vw" }}
    >
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img src={logo} height="70" alt="brang logo" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar1"
        >
          <i className="bs bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
          <div className="navbar-nav ms-auto">
            <Link
              to="/welcome"
              className="nav-item nav-link navitems activenav"
            >
              Home
            </Link>
            <a
              onClick={() => window.scrollTo({ top: 675, behavior: "smooth" })}
              className="nav-item nav-link navitems "
            >
              Rooms
            </a>
            <a
              onClick={() => window.scrollTo({ top: 1370, behavior: "smooth" })}
              className="nav-item nav-link navitems "
            >
              Employee
            </a>
            <a
              onClick={() => window.scrollTo({ top: 2740, behavior: "smooth" })}
              className="nav-item nav-link navitems "
            >
              Reception
            </a>
            <Link
              to="/welcome"
              className="nav-item nav-link navitems "
              onClick={logout}
            >
              {" "}
              Log Out <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
