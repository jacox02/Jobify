import React, { Component } from "react";
import { Card } from "react-bootstrap";

const axios = require("axios");
export default class JobsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
    };
  }

  getWorks() {
    axios
      .get("http://localhost:3050/Works/List")
      .then((response) => {
        this.setState({ works: response.data });
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }

  renderJobs() {
    return this.state.works.map((work) => {
      return (
        <Card style={{ width: "18rem" }} key={work.Work_ID}>
          <Card.Body>
            <Card.Title>{work.Work_Title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {work.Category_Name}
            </Card.Subtitle>
            <Card.Text>{work.Description}</Card.Text>
            <Card.Link href={`/Works/${work.Work_ID}/Details`}>
              Vermas
            </Card.Link>
          </Card.Body>
        </Card>
      );
    });
  }
  componentDidMount() {
    this.getWorks();
  }
  render() {
    return (
      <div>
        <div>{this.renderJobs()}</div>
      </div>
    );
  }
}
