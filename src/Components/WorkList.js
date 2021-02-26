import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/styleWorklist.css";
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
        `${process.env.REACT_APP_API_URL}/myWorks/${"lapara453@gmail.com"}/List`
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
            <Button variant="outline-danger" className="Modificadores">
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
            <Button variant="outline-warning" className="Modificadores">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </td>
        </tr>
      );
    });
  }
  //Poner que con Auth mande el correo del usuario o transformarlo a React Functional Component
  render() {
    return (
      <div className="List">
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
