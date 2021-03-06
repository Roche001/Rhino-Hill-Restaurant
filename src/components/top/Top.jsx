import React from "react";
import "./Top.css";

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
const Top = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#f57f1" variant="dark">
      <Container>
        <Navbar.Brand href="#Home">
          <div className="img">
            <img src="./assets/Logo1.png" alt="Logo" />
            <h4> Rhino Hill Restaurant</h4>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="nav-items">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="link">
                  <li>Home</li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Popular" className="link">
                  {" "}
                  <li>Popular</li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Shop" className="link">
                  <li>Shop</li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Reservation" className="link">
                  <li>Reservation</li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Account" className="link">
                  <li>Account</li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contacts" className="link">
                  <li>Contacts</li>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Top;
