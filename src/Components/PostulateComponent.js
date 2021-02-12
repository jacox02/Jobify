import React from "react";
import { Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

export default function PostulateComponent() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={user.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>why do you deserve the job?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    )
  );
}
