import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "../style/PostJobStyle.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const axios = require("axios");

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
  //Methodo para checar que todos los campos esten llenos
  checkFilledFields() {
    let data = this.state.form;
    if (!data.workTitle ||
      !data.workKeywords ||
      !data.workWebSite ||
      !data.workLocation ||
      !data.workPosition ||
      !data.workEmail ||
      !data.workApplyMethod ||
      !data.workEmail ||
      !data.workDescription ||
      !data.workCategory) {
        console.log(data)
      return false;
    } else {
      return true
    }
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
            <select
              className="form-control"
              as="select"
              name="workCategory"
              onChange={this.handleChange}
            >
              {this.state.categories.map((category) => (
                <option key={category.Category_ID} value={category.Category_ID}>
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
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group as={Row}>
            <Col>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  let data = this.state.form;
                  if (this.checkFilledFields() === true) {
                    axios
                      .post(`${process.env.REACT_APP_API_URL}/works/add/`, {
                        title: data.workTitle,
                        keyword: data.workKeywords,
                        joburl: data.workWebSite,
                        worktype: data.workType,
                        worklocation: data.workLocation,
                        position: data.workPosition,
                        applyMethodMail: data.workEmail,
                        applymethod: data.workApplyMethod,
                        ownermail: data.workEmail,
                        description: data.workDescription,
                        categoryid: parseInt(data.workCategory),
                      })
                      .then((res) => {
                        let serverResponse = res.data.code;
                        if (serverResponse == 200) {
                          MySwal.fire({
                            title: res.data.title,
                            text: res.data.text,
                            icon: res.data.icon,
                            confirmButtonText: res.data.confirmButtonText,
                            allowEnterKey: res.data.allowEnterKey,
                            allowEscapeKey: true,
                            allowOutsideClick: true,
                            timer: 500,
                            timerProgressBar: true,
                          });
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    MySwal.fire({
                      title: "Trabajo no publicado",
                      text:
                        "Rellene todos los campos y asegurese de haber cliqueado bien la categoria y el tipo de trabajo que tiene",
                      icon: "error",
                      confirmButtonText: "Ok",
                      allowEnterKey: true,
                      allowEscapeKey: true,
                      allowOutsideClick: true,
                      allowEscapeKey: true,
                      allowOutsideClick: true,
                      timer: 3000,
                      timerProgressBar: true,
                    });
                  }
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
