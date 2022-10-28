import React from "react";
import "./Top.css";

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
const Top = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#f57f1" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link-one">
            <div className="img">
              <img src="./assets/Logo1.png" alt="Logo" />
              <h4> Rhino Hill Restaurant</h4>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link color">
                <li>Home</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Popular" className="link color">
                {" "}
                <li>Popular</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Shop" className="link color">
                <li>Shop</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Reservation" className="link color">
                <li>Reservation</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Account" className="link color">
                <li>Account</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contacts" className="link color">
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
