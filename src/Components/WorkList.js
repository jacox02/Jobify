import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

const axios = require("axios");

export default class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myJobs: [],
    };
  }

  getWorkList() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/Works/${"lapara453@gmail.com"}/List`
      )
      .then((response) => {
        this.setState({
          myJobs: response.data,
        });
      });
  }

  componentDidMount() {
    this.getWorkList();
  }

  renderJobsRows() {
    return this.state.myJobs.map((row) => {
      return (
        <tr key={row.Work_ID}>
          <td>{row.Work_ID}</td>
          <td>{row.Work_Title}</td>
          <td>{row.WorkType}</td>
          <td>{row.Location}</td>
          <td>{row.Position}</td>
          <td>
            <Button variant="outline-danger">D</Button>
            <Button variant="outline-warning">E</Button>
          </td>
        </tr>
      );
    });
  }
  //Poner que con Auth mande el correo del usuario o transformarlo a React Functional Component
  render() {
    return (
      <div>
        <Table size="sm" variant="dark" striped hover>
          <thead>
            <tr>
              <td>ID</td>
              <td>Titulo</td>
              <td>Tipo</td>
              <td>Ubicacion</td>
              <td>Posicion</td>
              <td>Opciones</td>
            </tr>
          </thead>
          <tbody>{this.renderJobsRows()}</tbody>
        </Table>
      </div>
    );
  }
}
