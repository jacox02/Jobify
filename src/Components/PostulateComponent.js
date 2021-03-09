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

  constructor() {
    super();
    this.state ={
      email: "",
      number: "",
      mensaje: "",
      file: null,
    }
    this.enviarMensaje = this.enviarMensaje.bind(this);
    this.Add = this.Add.bind(this);
  }

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

  Add = (e) => {
      this.setState({
        file:  e.target.files[0],
        loaded: 0,
      })
    
  }

  enviarMensaje = (e) => {
    e.preventDefault();
    const { email, number, mensaje } = this.state
    console.log(this.state.file)
    const file = new FormData() 
    file.append('file', this.state.file)
    file.append('email', this.state.email)
    file.append('number', this.state.number)
    file.append('mensaje', this.state.mensaje)
    axios.post(`${process.env.REACT_APP_API_URL}/sendemail`, file,{

    })
      .then(res => {
      console.log(res.statusText)
   })
  }
  render() {
    return (
      <div>
        <Form enctype="multipart/form-data" className="FormPostulate" onSubmit={this.enviarMensaje}>
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
          <Form.Group>
            <Form.Label> Add you CV
            </Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={this.Add}
              multiple
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
