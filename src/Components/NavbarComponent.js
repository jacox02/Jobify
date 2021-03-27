import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarComponent() {
  const isAuthenticated = () => {
    if (Cookies.get("User_ID")) {
      return true;
    } else {
      return false;
    }
  };
  function userBarButton() {
    isAuthenticated();

    const logout = () => {
      Cookies.remove("User_ID");
    };

    if (isAuthenticated() === true) {
      return (
        <Button variant="warning" onClick={() => logout()}>
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
            <NavDropdown
              title="Trabajos"
              id="basic-nav-dropdown"
              hidden={!isAuthenticated()}
            >
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
}
