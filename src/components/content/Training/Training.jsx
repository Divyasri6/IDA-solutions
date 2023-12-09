import React from "react";
import Card from "./Card.jsx";
import note from "./Note";
import { Row } from "react-bootstrap";
import "./Training.css";
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      notes={contact.text}
    />
  );
}
function Training() {
  return (
    <div className="training-main section__padding">
      <h3 className="trainingtext">
        We offer excellent training for the following:
      </h3>
      <div className="training">
        <Row>{note.map(createCard)}</Row>
      </div>
    </div>
  );
}
export default Training;
