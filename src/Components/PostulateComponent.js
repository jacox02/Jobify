import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import {
  faPaperPlane,
  faEnvelope,
  faMobileAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/stylePostulate.css";

export default class PostulateComponent extends Component {
  email = React.createRef();
  number = React.createRef();
  mensaje = React.createRef();

  state = {
    email: "",
    number: "",
    mensaje: "",
  };

  Cambios = () => {
    var email = this.email.current.value;
    var number = this.number.current.value;
    var mensaje = this.mensaje.current.value;
    this.setState({
      email: email,
      number: number,
      mensaje: mensaje,
    });
  };

  constructor() {
    super();
    this.enviarMensaje = this.enviarMensaje.bind(this);
  }
  async enviarMensaje(e) {
    e.preventDefault();
    const { email, number, mensaje } = this.state;
    await axios.post("http://localhost:3050/sendemail", {
      email,
      number,
      mensaje,
    });
  }
  render() {
    return (
      <div>
        <Form className="FormPostulate" onSubmit={this.enviarMensaje}>
          <Form.Group>
            <Form.Label>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={this.Cambios}
              ref={this.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <FontAwesomeIcon icon={faMobileAlt} /> Phone Number
            </Form.Label>
            <Form.Control
              type="text"
              name="number"
              onChange={this.Cambios}
              ref={this.number}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              {" "}
              <FontAwesomeIcon icon={faFileAlt} /> why do you deserve the job?
            </Form.Label>
            <Form.Control
              as="textarea"
              name="mensaje"
              rows={3}
              onChange={this.Cambios}
              ref={this.mensaje}
            />
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Button variant="secondary" block type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
                Publicar
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
