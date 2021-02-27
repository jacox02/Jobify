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
  handleChange = async (e) => {
    await this.setState({
      perPage : this.state.perPage = e.target.value,
    });
    console.log(this.state.perPage)
  };
  getperPage() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/WorkQuantity`)
      .then((response) => {
        let quantity = response.data[0].Work_Quantity;
        this.setState({ perPage: quantity });
        console.log(`Informacion traida del API = ${this.state.perPage}`);
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }
  updateperPage(){
    axios
    .post(`${process.env.REACT_APP_API_URL}/WorkQuantity/edit`, {
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
              placeholder={`La cantidad de trabajos mostrados por pagina es: ` + this.state.perPage}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>
          <Button className="btn-block bg-primary" onClick={this.updateperPage.bind(this)}>
            Guardar
          </Button>
        </Form>
      </div>
    );
  }
}
