import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import "../style/PanelControlSyle.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const axios = require("axios");

export default class CPanelComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: [],
      categories: [],
      Selected_Category: 0,
    };
  }

  getCategories() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/Works/Categories`)
      .then((response) => {
        this.setState({
          categories: response.data,
        });
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }
  getperPage() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/config`)
      .then((response) => {
        this.setState({
          perPage: response.data.Work_Quantity,
        });
        console.log(response.data.Work_Quantity);
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }
  updateConfig() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/config/edit`, {
        quantity: this.state.perPage,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  componentDidMount() {
    this.getCategories();
    this.getperPage();
  }
  render() {
    return (
      <div>
        <div className="display-1 text-center">Panel de Control</div>
        <Form>
          <div className="container cpanel bg-light text-dark rounded mt-5 mb-5 ">
            <Form.Group>
              <Form.Label className="h3">
                Cantidad de trabajos por pagina
              </Form.Label>
              <Form.Control
                type="number"
                name="pagination"
                placeholder={`La cantidad de trabajos mostrados por pagina es: ${this.state.perPage}`}
                onChange={(e) => {
                  this.setState({ perPage: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <select
                className="form-control"
                as="select"
                name="workCategory"
                onChange={(e) => {
                  this.setState({ Selected_Category: e.target.value });
                }}
              >
                {this.state.categories.map((category) => (
                  <option
                    value={category.Category_ID}
                    key={category.Category_ID}
                  >
                    {category.Category_Name}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Button
              className="btn-block bg-primary"
              onClick={() => {
                this.updateConfig();
              }}
            >
              Guardar
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
