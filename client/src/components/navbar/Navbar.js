import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top sticky navbar-dark"
      id="navbar"
    >
      <div className="container-fluid">
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link nav-link-custom"
                aria-current="page"
                href="#"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#">
                WORK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
