import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "../style/PostJobStyle.css";

export default function PostJobComponent() {
  const { user } = useAuth0();
  return (
    <div>
      <Form className="Post">
        <Form.Group>
          <Form.Label>Work Title</Form.Label>
          <Form.Control type="Text" name="title" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control type="Text" name="position" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Work Keywords</Form.Label>
          <Form.Control type="Text" name="keywords" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="Text" name="worklocation" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Working Time</Form.Label>
          <Form.Control as="select" name="worktype">
            <option>Full Time</option>
            <option>Parti-Time Job</option>
            <option>Flexitime</option>
            <option>Temporary Job</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Publish Date</Form.Label>
          <Form.Control type="Text" />
        </Form.Group>

        <Form.Group controlId="formHorizontalEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" name="emaiil" value={user.email} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Apply Method</Form.Label>
          <Form.Control type="Text" name="applymethod" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control as="select" name="category">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" />
        </Form.Group>

        <Form.Group as={Row}>
          <Col>
            <Button variant="secondary" size="lg" block type="submit">
              Publicar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
