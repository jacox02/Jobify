import React, { Component } from 'react'
import { Form, Button, Col, Row } from "react-bootstrap";
import "../style/styleLogin.css";


const axios = require("axios");

export default class RegistryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        User_Name:"",
        User_Email:"", 
        User_Password:""
      },
      
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

  };

  render() {
    return (
      <Form className="formulario">
      <center><h1>Sign up</h1></center>
      <Form.Group>
        <Form.Label>User Name</Form.Label>
        <Form.Control 
        name="User_Name"
        type="text"
        onChange={this.handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control  
        name="User_Email"
        type="email" 
        onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control 
        name="User_Password"
        type="password"
        onChange={this.handleChange} />
      </Form.Group>

      <Form.Group as={Row}>
        <Col>
          <Button 
          className="Button" 
          variant="success" 
          type="submit" 
          block>
            Registrar
          </Button>
        </Col>
      </Form.Group>
    </Form>
    )
  }
}
