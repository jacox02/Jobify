import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../style/styleWorkDetail.css";

export default function WorkDetailSComponents(props) {
  const [WorkDetails, setWorks] = useState([
    {
      Apply_Method: "Send a email to email@email.com",
      Category_ID: 14,
      Category_Name: "Desarrollo Web",
      Company_ID: 2,
      Company_Logo: null,
      Company_Name: "Google LLC",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est dolor. Suspendisse semper lorem est. Ut eget molestie libero. Cras rhoncus urna nisi, a dignissim orci fermentum vel. Fusce tempor lorem lorem, nec dictum mi consequat a. Phasellus pulvinar sem et ex commodo vehicula. Etiam eget porta arcu. In euismod, diam pretium ullamcorper dapibus, ipsum turpis finibus enim, a gravida justo massa non augue.",
      Email: "email@email.com",
      Job_URL: "https://google.com",
      Location: "Palo Alto, CA",
      Position: "Developer",
      Publish_Date: "2021-01-27T16:30:21.000Z",
      WorkType: "Full-Time",
      Work_ID: 1,
      Work_Keywords: "#Junior #React",
      Work_Title: "Junior React Developer",
    },
  ]);

  const cards = WorkDetails.map((WorkDetail) => {
    return (
      <Card className="Jobs">
        <Card.Header>{WorkDetail.Company_Name}</Card.Header>
        <Card.Body>
          <Card.Title>{WorkDetail.Work_Title}</Card.Title>
          <Card.Text>{WorkDetail.Description}</Card.Text>
          <Card.Text>Correo:{WorkDetail.Email}</Card.Text>
          <Card.Text>Ubicacion: {WorkDetail.Location}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return <div>{cards}</div>;
}
