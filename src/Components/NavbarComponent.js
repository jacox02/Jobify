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
      <Navbar expand="lg" bg="light" variant="light"> 
        <Navbar.Brand href="/">Jobify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/AddOffer">Add job</Nav.Link>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Works/1/List">
                Cualquiera
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/2/List">
                Contabilidad
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/3/List">
                Administracion
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/4/List">
                Banca | Servicios Financieros
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/5/List">
                Contabilidad | Finanzas | Auditoria
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/6/List">Salud</NavDropdown.Item>
              <NavDropdown.Item href="/Works/7/List">
                Recursos Humanos
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/13/List">
                Diseño Grafico
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/14/List">
                Desarrollo Web
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/15/List">
                Administracion de Sistema
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/16/List">
                Redes y Telecomunicaciones
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/17/List">
                Desarrollo de Videojuegos
              </NavDropdown.Item>
              <NavDropdown.Item href="/Works/18/List">
                Desarrollo de Software
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
