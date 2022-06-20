import React from "react";
import "./Nav.css";
import { useState } from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data
            target="#navbar-collapse-main"
          >
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="logo-bg">
          <div className="logo">
            <img src="./assets/Logo1.png" alt="Logo" />
          </div>
          <div className="logo-def">
            <h4> Rhino Hill Restaurant</h4>
          </div>
        </div>

        <ul className="nav-items">
          <Link
            to="/"
            className="link"
            onClick={() => setActiveNav("/")}
            id={activeNav === "/" ? "active" : ""}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/Popular"
            className="link"
            onClick={() => setActiveNav("/Popular")}
            id={activeNav === "/Popular" ? "active" : ""}
          >
            {" "}
            <li>Popular</li>
          </Link>
          <Link
            to="/Shop"
            className="link"
            onClick={() => setActiveNav("/Shop")}
            id={activeNav === "/Shop" ? "active" : ""}
          >
            <li>Shop</li>
          </Link>
          <Link
            to="/Reservation"
            className="link"
            onClick={() => setActiveNav("/Reservation")}
            id={activeNav === "/Reservation" ? "active" : ""}
          >
            <li>Reservation</li>
          </Link>
          <Link
            to="/Account"
            className="link"
            onClick={() => setActiveNav("/Account")}
            id={activeNav === "/Account" ? "active" : ""}
          >
            <li>Account</li>
          </Link>
          <Link
            to="/Contacts"
            className="link"
            onClick={() => setActiveNav("/Contacts")}
            id={activeNav === "/Contacts" ? "active" : ""}
          >
            <li>Contacts</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
