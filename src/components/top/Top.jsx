import React from "react";
import "./Top.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Top = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <Navbar collapseOnSelect expand="lg" bg="#f57f1" variant="dark">
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
            <Nav.Link>
              <Link
                to="/"
                className="link"
                onClick={() => setActiveNav("/")}
                id={activeNav === "/" ? "active" : ""}
              >
                <li>Home</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Popular"
                className="link"
                onClick={() => setActiveNav("/Popular")}
                id={activeNav === "/Popular" ? "active" : ""}
              >
                {" "}
                <li>Popular</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Shop"
                className="link"
                onClick={() => setActiveNav("/Shop")}
                id={activeNav === "/Shop" ? "active" : ""}
              >
                <li>Shop</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Reservation"
                className="link"
                onClick={() => setActiveNav("/Reservation")}
                id={activeNav === "/Reservation" ? "active" : ""}
              >
                <li>Reservation</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Account"
                className="link"
                onClick={() => setActiveNav("/Account")}
                id={activeNav === "/Account" ? "active" : ""}
              >
                <li>Account</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Contacts"
                className="link"
                onClick={() => setActiveNav("/Contacts")}
                id={activeNav === "/Contacts" ? "active" : ""}
              >
                <li>Contacts</li>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
