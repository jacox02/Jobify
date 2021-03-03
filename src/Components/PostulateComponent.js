import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {
  faPaperPlane,
  faEnvelope,
  faMobileAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/stylePostulate.css";

export default function PostulateComponent() {
  return (
    <div>
      <Form className="FormPostulate">
        <Form.Group>
          <Form.Label>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <FontAwesomeIcon icon={faMobileAlt} /> Phone Number
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            {" "}
            <FontAwesomeIcon icon={faFileAlt} /> why do you deserve the job?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
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
