import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/styleWorklist.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
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
    this.renderJobsRows();
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
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => {
                  console.log(`DELETE BUTTON WORKING RN ${row.Work_ID}`);
                  axios
                    .post(
                      `${process.env.REACT_APP_API_URL}/works/delete/${row.Work_ID}`
                    )
                    .then((res) => {
                      MySwal.fire({
                        title: "Trabajo eliminado con exito",
                        icon: "success",
                        confirmButtonText: "Ok",
                        allowEnterKey: true,
                        allowEscapeKey: true,
                        allowOutsideClick: true,
                        allowEscapeKey: true,
                        allowOutsideClick: true,
                        timer: 3000,
                        timerProgressBar: true,
                      });
                      this.getWorkList();
                    })
                    .catch((err) => {
                      MySwal.fire({
                        title: "Trabajo no eliminado",
                        text: `Hubo un error al tratar de eliminar este trabajo, reintente mas tarde. Error: \n ${err.message}`,
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
                    });
                  this.getWorkList();
                }}
              />
            </Button>
            <Button variant="outline-warning" className="Modificadores">
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => {
                  console.log(`EDIT BUTTON WORKING RN ${row.Work_ID}`);
                }}
              />
            </Button>
          </td>
        </tr>
      );
    });
  }
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
