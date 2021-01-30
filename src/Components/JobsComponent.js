import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const axios = require("axios");

export default function Jobs() {
  const [Works, setWorks] = useState([]);

  const getJobs = () => {
    axios
      .get("http://localhost:3050/Works/List")
      .then((response) => {
        console.log(response.data);
        setWorks(response.data);
        console.log(Works);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderJobs = () => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      {() => {
        renderJobs();
      }}
    </div>
  );
}
