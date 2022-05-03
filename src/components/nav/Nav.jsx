import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo-bg">
        <div className="logo">
          <img src="./assets/Logo1.png" alt="Logo" />
        </div>
        <div className="logo-def">
          <h4> Rhino Hill Restaurant</h4>
        </div>
      </div>

      <ul className="nav-items">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/Popular" className="link">
          {" "}
          <li>Popular</li>
        </Link>
        <Link to="/Shop" className="link">
          <li>Shop</li>
        </Link>
        <Link to="/Reservation" className="link">
          <li>Reservation</li>
        </Link>
        <Link to="/Account" className="link">
          <li>Account</li>
        </Link>
        <Link to="/Contacts" className="link">
          <li>Contacts</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
