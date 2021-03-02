import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import { faSignInAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = React.memo(function NavbarComponent() {
  function userBarButton() {
    let isAuthenticated = true;
    if ((isAuthenticated = true)) {
      return (
        <Button variant="warning">
          <FontAwesomeIcon icon={faSignInAlt} /> Logout
        </Button>
      );
    } else {
      return (
        <Button variant="success" href="/login">
          Login
        </Button>
      );
    }
  }

  return (
    <div>
      <Navbar variant="dark" expand="lg" className="Navbar">
        <Navbar.Brand href="/">Jobify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <NavDropdown title="Trabajos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/AddOffer">
                Agregar trabajo
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/:ownermail/List">
                Mis trabajos
              </NavDropdown.Item>
              <NavDropdown.Item href="/controlPanel">
                Panel de control
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto"></Nav>
          <>{userBarButton()}</>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});

export default NavbarComponent;
