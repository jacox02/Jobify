import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { faSignInAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavbarComponent = React.memo(function NavbarComponent() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  function userBarButton() {
    if (isAuthenticated) {
      return (
        <Button variant="warning" onClick={() => logout()}>
         <FontAwesomeIcon icon={faSignInAlt}/> Logout
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
            <Nav.Link href="/"><FontAwesomeIcon icon={faHome}/> Home</Nav.Link>
            <NavDropdown title="Trabajos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/AddOffer">
                Agregar trabajo
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/:ownermail/List">
                Mis trabajos
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
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
