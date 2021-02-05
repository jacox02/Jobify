import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "../style/styleWorkDetail.css";

const axios = require("axios");
export default class WDetailsComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      Work: {
        Apply_Method: "",
        Category_ID: 0,
        Category_Name: "",
        Company_ID: 0,
        Company_Logo: "",
        Company_Name: "",
        Description: "",
        Email: "",
        Job_URL: "",
        Location: "",
        Position: "",
        Publish_Date: "",
        WorkType: "",
        Work_ID: 0,
        Work_Keywords: "",
        Work_Title: "",
      },
    };
  }
  getWorkDetails() {
    axios
      .get(`http://localhost:3050/Works/${this.props.match.params.id}/Details`)
      .then((res) => {
        this.setState({ Work: res.data[0] });
      })
      .catch((err) => {
        return err;
      });
  }
  componentDidMount() {
    this.getWorkDetails();
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Card className="Jobs">
          <Card.Header>{`${this.state.Work.Company_Name} ID: ${this.props.match.params.id}`}</Card.Header>
          <Card.Body>
            <Card.Title>{this.state.Work.Work_Title}</Card.Title>
            <Card.Text>{this.state.Work.Description}</Card.Text>
            <Card.Text>Correo:{this.state.Work.Email}</Card.Text>
            <Card.Text>Ubicacion: {this.state.Work.Location}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
