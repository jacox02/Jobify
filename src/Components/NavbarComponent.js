import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";

export default class NavbarComponent extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Works/1/Details">
                  Componente test
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Link to="/Login">
              <Button variant="outline-success">Login </Button>
            </Link>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/Login">
            <LoginComponent />
          </Route>
          <Route exact path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}
