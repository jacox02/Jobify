import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/styleLogin.css";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function LoginComponent() {
  const [password, setPassword] = useState("");
  const [useremail, setUseremail] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  axios.defaults.withCredentials = true;
  const login = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        User_Email: useremail,
        User_Password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].User_Email);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3050/login").then((response) => {
      if (response.data.loggedInd == true) {
        setLoginStatus(response.data.user[0].User_Email);
      }
    });
  }, []);

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
          onChange={(e) => {
            setUseremail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="User_Password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <a href="#">Forgot password?</a>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Button
          className="Button"
          variant="success"
          type="submit"
          block
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Log In
        </Button>
      </Form.Group>
      <Form.Group>
        <Button
          className="Button"
          variant="warning"
          type="submit"
          href="/register"
          block
        >
          Sign Up
          <FontAwesomeIcon icon={faUser} />
        </Button>
      </Form.Group>
      <h1>{loginStatus}</h1>
    </Form>
  );
}

export default LoginComponent;
