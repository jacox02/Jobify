import React, { Component } from "react";
import { Form, Col, Row, Button, ModalTitle, ModalBody } from "react-bootstrap";
import "../style/PostJobStyle.css";

export default class PostJobComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        workTitle: "",
        workType: "",
        workPosition: "",
        workDescription: "",
        workLocation: "",
        workCategory: "",
      },
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Form className="Post">
          <Form.Group>
            <Form.Label>Work Title</Form.Label>
            <Form.Control
              type="Text"
              name="workTitle"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="Text"
              name="workPosition"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Work Keywords</Form.Label>
            <Form.Control
              type="Text"
              name="keywords"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="Text"
              name="workLocation"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Working Time</Form.Label>
            <Form.Control
              as="select"
              name="workType"
              onChange={this.handleChange}
            >
              <option>Full Time</option>
              <option>Parti-Time Job</option>
              <option>Flexitime</option>
              <option>Temporary Job</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formHorizontalEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Apply Method</Form.Label>
            <Form.Control
              type="Text"
              name="applymethod"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              as="select"
              name="workCategory"
              onChange={this.handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="workDescription"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group as={Row}>
            <Col>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(this.state.form);
                }}
                variant="secondary"
                size="lg"
                block
                type="submit"
              >
                Publicar
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
