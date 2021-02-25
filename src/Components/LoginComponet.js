import React from "react";
import { Form, Button } from "react-bootstrap";
import "../style/styleLogin.css"
export default function LoginComponet() {
  return (
    <Form className="formulario">
      <Form.Group>
        <Form.Label>Welcome</Form.Label>
      </Form.Group>
      <Form.Group controlId="formaBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="enter email"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password"/>
      </Form.Group>
      <Form.Group>
        <Form.Label><a href="#">Forgot password?</a></Form.Label>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          Continue</Button>
      </Form.Group>
    </Form>
  );
}
