import React, {useState} from 'react'
import { Form, Button, Col, Row } from "react-bootstrap";
import "../style/styleLogin.css";
import Axios from "axios";

function RegistryComponent() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [useremailReg, setUseremailReg] = useState("");

  const register =() => {
    Axios.post("http://localhost:3050/register",{
      User_Name: usernameReg,
      User_Email: useremailReg,
      User_Password: passwordReg
    }).then((response) =>{
      console.log(response);
    });
       
  }


  return (
    <Form className="formulario">
    <center><h1>Sign up</h1></center>
    <Form.Group>
      <Form.Label>User Name</Form.Label>
      <Form.Control 
      name="User_Name"
      type="text"
      onChange={(e) =>{
        setUsernameReg(e.target.value);}}
        />
    </Form.Group>
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control  
      name="User_Email"
      type="email" 
      onChange={(e) =>{
        setUseremailReg(e.target.value);}}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control 
      name="User_Password"
      type="password"
      onChange={(e) =>{
        setPasswordReg(e.target.value);}} />
    </Form.Group>

    <Form.Group as={Row}>
      <Col>
        <Button 
        className="Button" 
        variant="success" 
        type="submit" 
        block
        onClick={register}>
          Registrar
        </Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default RegistryComponent
