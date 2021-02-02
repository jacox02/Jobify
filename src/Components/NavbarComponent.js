import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavbarComponent = React.memo(function NavbarComponent() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  function userBarButton() {
    if (isAuthenticated) {
      return (
        <Button variant="outline-danger" onClick={() => logout()}>
          Logout
        </Button>
      );
    } else {
      return (
        <Button variant="outline-success" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      );
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Jobify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <>{userBarButton()}</>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});

export default NavbarComponent;
