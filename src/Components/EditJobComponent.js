import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "../style/PostJobStyle.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect } from "react-router-dom";
const axios = require("axios");

const MySwal = withReactContent(Swal);
export default class EditJobComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workTitle: null,
      workType: null,
      workPosition: null,
      workDescription: null,
      workLocation: null,
      workKeywords: null,
      workWebSite: null,
      workEmail: null,
      workApplyMethod: null,
      categories: [],
      redirect: false,
    };
  }

  checkFilledFields() {
    if (
      this.state.workTitle === null ||
      this.state.workTitle === "" ||
      this.state.workKeywords === null ||
      this.state.workKeywords === "" ||
      this.state.workWebSite === null ||
      this.state.workWebSite === null ||
      this.state.workLocation === null ||
      this.state.workLocation === "" ||
      this.state.workPosition === null ||
      this.state.workPosition === "" ||
      this.state.workEmail === null ||
      this.state.workEmail === "" ||
      this.state.workApplyMethod === null ||
      this.state.workApplyMethod === "" ||
      this.state.workEmail === null ||
      this.state.workEmail === "" ||
      this.state.workDescription === null ||
      this.state.workDescription === "" ||
      this.state.workCategory === null ||
      this.state.workCategory === ""
    ) {
      return false;
    } else {
      return true;
    }
  }
  fillFormData() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/works/${this.props.match.params.id}/details`
      )
      .then((response) => {
        let work = response.data[0];
        console.log({ work: work });
        this.setState({
          workTitle: work.Work_Title,
          workType: work.WorkType,
          workPosition: work.Position,
          workDescription: work.Description,
          workLocation: work.Location,
          workKeywords: work.Work_Keywords,
          workWebSite: work.Job_URL,
          workEmail: work.Email,
          workApplyMethod: work.Apply_Method,
          workCategory: work.Category_ID,
        });
        console.log({ state: this.state.form });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories/list`)
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
    this.fillFormData();
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <div>
          <Form className="Post">
            <Form.Group>
              <Form.Label>Work Title</Form.Label>
              <Form.Control
                type="Text"
                name="workTitle"
                value={this.state.workTitle}
                onChange={(e) => {
                  this.setState({ workTitle: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="Text"
                name="workPosition"
                value={this.state.workPosition}
                onChange={(e) => {
                  this.setState({ workPosition: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Work Keywords</Form.Label>
              <Form.Control
                type="Text"
                name="workKeywords"
                value={this.state.workKeywords}
                onChange={(e) => {
                  this.setState({ workKeywords: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Sitio web de la propuesta</Form.Label>
              <Form.Control
                type="Text"
                name="workWebSite"
                value={this.state.workWebSite}
                onChange={(e) => {
                  this.setState({ workWebSite: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="Text"
                name="workLocation"
                value={this.state.workLocation}
                onChange={(e) => {
                  this.setState({ workLocation: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Working Time</Form.Label>
              <Form.Control
                as="select"
                name="workType"
                value={this.state.workType}
                onChange={(e) => {
                  this.setState({ workType: e.target.value });
                }}
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
                type="email"
                name="workEmail"
                value={this.state.workEmail}
                onChange={(e) => {
                  this.setState({ workEmail: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Apply Method</Form.Label>
              <Form.Control
                type="Text"
                name="workApplyMethod"
                value={this.state.workApplyMethod}
                onChange={(e) => {
                  this.setState({ workApplyMethod: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <select
                className="form-control"
                as="select"
                name="workCategory"
                value={this.state.workCategory}
                defaultChecked={this.state.workCategory}
                onChange={(e) => {
                  this.setState({ workCategory: e.target.value });
                }}
              >
                {this.state.categories.map((category) => (
                  <option
                    key={category.Category_ID}
                    value={category.Category_ID}
                  >
                    {category.Category_Name}
                  </option>
                ))}
              </select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="workDescription"
                value={this.state.workDescription}
                onChange={(e) => {
                  this.setState({ workDescription: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    if (this.checkFilledFields() === true) {
                      axios
                        .post(
                          `${process.env.REACT_APP_API_URL}/works/${this.props.match.params.id}/edit/`,
                          {
                            Work_Title: this.state.workTitle,
                            Work_Keywords: this.state.workKeywords,
                            Job_URL: this.state.workWebSite,
                            WorkType: this.state.workType,
                            Location: this.state.workLocation,
                            Position: this.state.workPosition,
                            Email: this.state.workEmail,
                            Apply_Method: this.state.workApplyMethod,
                            Owner_Email: this.state.workEmail,
                            Description: this.state.workDescription,
                            Category_ID: parseInt(this.state.workCategory),
                          }
                        )
                        .then((res) => {
                          if (res.status === 200) {
                            MySwal.fire({
                              title: "Se edito el trabajo correctamente",
                              icon: "success",
                              allowEnterKey: true,
                              allowEscapeKey: true,
                              allowOutsideClick: true,
                              timer: 2000,
                              timerProgressBar: true,
                            });
                            setTimeout(
                              () => this.setState({ redirect: true }),
                              2000
                            );
                          }
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    } else {
                      MySwal.fire({
                        title: "Trabajo no editado",
                        text:
                          "Rellene todos los campos y asegurese de haber cliqueado bien la categoria y el tipo de trabajo que tiene",
                        icon: "error",
                        confirmButtonText: "Ok",
                        allowEnterKey: true,
                        allowEscapeKey: true,
                        allowOutsideClick: true,
                        timer: 3000,
                        timerProgressBar: true,
                      });
                    }
                  }}
                  variant="success"
                  size="lg"
                  block
                  type="submit"
                >
                  Guardar cambios
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      );
    }
  }
}
