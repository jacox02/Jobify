import React from "react";
import { Form, Button } from "react-bootstrap";
import "../style/styleLogin.css";
import {
  faSignInAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoginComponent() {
  return (
    <Form className="formulario">
      <Form.Group>
        <center><h2>Welcome to Jobify</h2></center>
      </Form.Group>
      <Form.Group controlId="formaBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <a href="#">Forgot password?</a>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Button className="Button" variant="success" type="submit" block>
        Log In <FontAwesomeIcon icon={faSignInAlt} /> 
        </Button>
      </Form.Group>
      <Form.Group>
        <Button className="Button" variant="warning" type="submit" block>
          Sign Up <FontAwesomeIcon icon={faUser} /> 
        </Button>
      </Form.Group>
    </Form>
  );
}
