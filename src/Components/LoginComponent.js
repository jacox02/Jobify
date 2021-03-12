import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/styleLogin.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
          setLoginStatus(response.data[0].User_ID);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3050/login").then((response) => {
      console.log(response.data.user);
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].User_ID);
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
