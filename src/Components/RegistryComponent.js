import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Axios from "axios";
import "../style/styleLogin.css";
const MySwal = withReactContent(Swal);

function RegistryComponent() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [useremailReg, setUseremailReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3050/register", {
      User_Name: usernameReg,
      User_Email: useremailReg,
      User_Password: passwordReg,
    })
      .then(() => {
        MySwal.fire({
          title: "Registro exitoso, redirigiendo",
          icon: "success",
          confirmButtonText: true,
          allowEnterKey: true,
          allowEscapeKey: true,
          allowOutsideClick: true,
          timer: 700,
          timerProgressBar: true,
        });
      })
      .catch((err) => {
        MySwal.fire({
          title: "No se pudo registrar, intente mas tarde",
          icon: "error",
          confirmButtonText: true,
          allowEnterKey: true,
          allowEscapeKey: true,
          allowOutsideClick: true,
          timer: 500,
          timerProgressBar: true,
        });
      });
  };

  return (
    <Form className="formulario">
      <center>
        <h1>Sign up</h1>
      </center>
      <Form.Group>
        <Form.Label>User Name</Form.Label>
        <Form.Control
          name="User_Name"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="User_Email"
          type="email"
          onChange={(e) => {
            setUseremailReg(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="User_Password"
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group as={Row}>
        <Col>
          <Button
            className="Button"
            variant="success"
            type="submit"
            block
            onClick={(e) => {
              e.preventDefault();
              register();
            }}
          >
            Registrar
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default RegistryComponent;
