import React, { Component } from "react";
import { Form, Col, Row, Button, ModalTitle, ModalBody } from "react-bootstrap";
import "../style/PostJobStyle.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const axios = require("axios");

const MySwal = withReactContent(Swal);
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
        workKeywords: "",
        workWebSite: "",
        workEmail: "",
        workApplyMethod: "",
      },
      categories: [],
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

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories/list`)
      .then((response) => {
        this.setState({ categories: response.data });
        console.log(this.state.categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
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
              name="workKeywords"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sitio web de la propuesta</Form.Label>
            <Form.Control
              type="Text"
              name="workWebSite"
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
              name="workEmail"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Apply Method</Form.Label>
            <Form.Control
              type="Text"
              name="workApplyMethod"
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
              {this.state.categories.map((category) => (
                <option key={category.Category_ID}>
                  {category.Category_Name}
                </option>
              ))}
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
                  let data = JSON.parse(this.state.form);
                  console.log(data);
                  axios({
                    method: "POST",
                    url: "http://localhost:3050/works/add",
                    data: data,
                  })
                    .then((res) => {
                      console.log(res);
                      let serverResponse = res.data.code;
                      if (serverResponse == 200) {
                        MySwal.fire({
                          title: "Trabajo publicado",
                          text: "Su trabajo ha sido publicado correctamente",
                          icon: "success",
                          confirmButtonText: "Ok",
                        });
                      } else {
                        MySwal.fire({
                          title: "Trabajo no publicado",
                          text: "Su trabajo no ha sido publicado correctamente",
                          icon: "error",
                          confirmButtonText: "Ok",
                        });
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
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
