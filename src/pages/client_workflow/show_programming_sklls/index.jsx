import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Programming_skills = () => {
  return (
    <div className="programing_skills_box d-flex flex-column ">
      <div className="p-4">
      <h2>Programming Language Select</h2>
      </div>
      <div className="d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Python</Card.Title>
          <Button variant="primary">Choose language </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <Card.Title>Java</Card.Title>
        <Button variant="primary">Choose language </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <Card.Title>Go </Card.Title>
        <Button variant="primary">Choose language </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <Card.Title>Node js</Card.Title>
          <Button variant="primary">Choose language </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Laravel</Card.Title>
          <Button variant="primary">Choose language </Button>
        </Card.Body>
      </Card>
      </div>
      
    </div>
  );
};

export default Programming_skills;
