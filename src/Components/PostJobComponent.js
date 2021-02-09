import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import "../style/PostJobStyle.css"

export default function PostJobComponent() {
  return (
    <Form className="Post bg-secondary">
      <Form.Group>
        <Form.Label >
          Work Title
        </Form.Label>
          <Form.Control type="Text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Position
        </Form.Label>
          <Form.Control type="Text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Work Keywords
        </Form.Label>
          <Form.Control type="Text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Location
        </Form.Label>
          <Form.Control type="Text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Working Time</Form.Label>
        <Form.Control as="select">
          <option>Full Time</option>
          <option>Parti-Time Job</option>
          <option>Flexitime</option>
          <option>Temporary Job</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Publish Date
        </Form.Label>
          <Form.Control type="Text" />
      </Form.Group>

      <Form.Group controlId="formHorizontalEmail">
        <Form.Label>
          Email
        </Form.Label>
          <Form.Control type="Email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Apply Method
        </Form.Label>
          <Form.Control type="Text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Categoria</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

      <Form.Group as={Row}>
        <Col >
          <Button variant="success"  size="lg" block type="submit">Publicar</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
{
  /*
export default withAuthenticationRequired(PostJobComponent, {
  onRedirecting: () => (
    <div>
      Checando credenciales, si no esta loggeado sera redirigido a la pagina de
      login...
    </div>
  ),
});
*/
}
