import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const axios = require("axios");

export default class CPanelComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: [],
    };
  }

  getperPage() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/WorkQuantity`)
      .then((response) => {
        let quantity = response.data[0].Work_Quantity;
        this.setState({ perPage: quantity });
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }

  
  
  componentDidMount() {
    this.getperPage();
  }
  render() {
    return (
      <div>
        <div className="display-1 text-center">Panel de Control</div>
        <Form>
          <Form.Group>
            <Form.Label className="display-4">
              Cantidad de trabajos por pagina
            </Form.Label>
            <Form.Control
              type="number"
              name="pagination"
              value={this.state.perPage}
            />
          </Form.Group>
          <Button className="btn-block bg-primary" onClick={this.getperPage}>
            Guardar
          </Button>
        </Form>
      </div>
    );
  }
}
