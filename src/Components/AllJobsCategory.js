import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "../style/styleWorkDetail.css";

const axios = require("axios");
export default class AllCategoriesComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      Works: [],
    };
  }
  getWorkDetails() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/Works/${this.props.match.params.id}/List`
      )
      .then((res) => {
        this.setState({ Works: res.data });
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
    return this.state.Works.map((work) => {
      return (
        <div key={work.Work_ID}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{work.Work_Title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {work.Company_Name}
              </Card.Subtitle>
              <Card.Text>{work.Location}</Card.Text>
              <Card.Link>
                <Card.Link href={`/Works/${work.Work_ID}/Details`}>
                  Ver mas
                </Card.Link>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}
