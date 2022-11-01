import React from "react";
import gear from "./images/gear.png";
import logo from "./images/logo.gif";
import profile from "./images/profile.png";
import about from "./images/about.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div>
          <Link className="navbar-brand text-light" to="/todoapp">
            <img src={logo} style={{ width: "50px" }} alt="" />
            Todo App
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container-fluid nav_div">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/todoapp">
                  {" "}
                  <i className="bi bi-house-fill"></i> Home{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/works">
                  <i className="bi bi-book-fill"></i> Todo
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {/* <li className="nav-item active">
                <Link className="nav-link d-flex" to="/">
                  <img src={gear} style={{ width: "30px" }} alt="" />
                </Link>
              </li> */}
              <div className="dropdown dropleft">
                <button
                  className="btn "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ border: "none" }}
                >
                  <img src={gear} style={{ width: "30px" }} alt="" />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/works">
                    <img src={profile} style={{ width: "30px" }} alt="" />
                    Profile
                  </Link>
                  <Link className="dropdown-item" to="/todoapp">
                    <img src={about} style={{ width: "30px" }} alt="" />
                    About
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
