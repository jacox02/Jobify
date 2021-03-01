import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/styleLogin.css";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const axios = require("axios");
class LoginComponent extends Component {
  state = {
    form: {
      User_Email:"", 
      User_Password:""
    },
  };

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
        <Form.Group>
          <center>
            <h2>Welcome to Jobify</h2>
          </center>
        </Form.Group>
        <Form.Group controlId="formaBasicPassword">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="User_Email"
            type="email"
            placeholder="enter email"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="User_Password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <a href="#">Forgot password?</a>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Button className="Button" 
                  variant="success" 
                  type="submit" 
                  block 
                  onClick={()=>this.iniciarSesion()}>
            Log In 
            <FontAwesomeIcon icon={faSignInAlt} />
          </Button>
        </Form.Group>
        <Form.Group>
          <Button className="Button" 
                  variant="warning" 
                  type="submit"  
                  href="/register" 
                  block >
            Sign Up 
            <FontAwesomeIcon icon={faUser} />
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default LoginComponent;
