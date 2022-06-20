import React from "react";
import "./Top.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Top = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <Navbar
      className="navbar navbar-default navbar-fixed-top"
      role="navigation"
    >
      <Container>
        <Navbar.Brand href="#Home">
          <div className="img">
            <img className="image" src="./assets/Logo1.png" alt="Logo" />
            <div className="image-h4">
              <h4> Rhino Hill Restaurant</h4>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
