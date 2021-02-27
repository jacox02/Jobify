import React, {Component} from "react";
import { Form, Button } from "react-bootstrap";
import "../style/styleLogin.css";
import {
  faSignInAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginComponent extends Component{
  state={
    form:{
      username:"",
      password:"",
    }
  }

  handleChange=async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form);
  }
  render(){
    return(
      <Form className="formulario">
      <Form.Group>
        <center><h2>Welcome to Jobify</h2></center>
      </Form.Group>
      <Form.Group controlId="formaBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control name="username" type="email" placeholder="enter email" onChange={this.handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="password" onChange={this.handleChange}/>
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
}

export default LoginComponent;
