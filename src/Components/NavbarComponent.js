import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarComponent = React.memo(function NavbarComponent() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  function userBarButton() {
    if (isAuthenticated) {
      return (
        <Button variant="warning" onClick={() => logout()}>
          Logout
        </Button>
      );
    } else {
      return (
        <Button variant="success" onClick={() => loginWithRedirect()}>
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/AddOffer">Add job</Nav.Link>
        </Nav>
          <Nav className="mr-auto">
          </Nav>
          <>{userBarButton()}</>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});

export default NavbarComponent;
