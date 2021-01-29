import React, { Component } from "react";
import {Form, Button} from "react-bootstrap";

export default class LoginComponent extends Component {
  
  render() {
    return (
    
    <Form className="container w-50 mt-5 shadow-none p-3 mb-5 bg-light rounded">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group   controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Button className="me-md-2" variant="primary" type="submit">
      Submit
    </Button>
    </div>
    
  </Form>
     ) }
}
