import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ProgrammingSkillsBrief = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="programming-skills-brief-box m-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>FRONT END – REACT</Card.Title>
          <Card.Title>BACK END – NODE</Card.Title>
          <Card.Title>DATABASE – MYSQL/MONGODB</Card.Title>
          <Card.Title>AVG COST – 2500 USD</Card.Title>
          <Card.Title>DELIVERY TIME – 4-5 MONTHS</Card.Title>
          <Card.Title>OTHER VARIABLES</Card.Title>
        </Card.Body>
      </Card>
      <Button className="bg-primary mt-3" onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>
      {showDetails && (
        <p className="text-black mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software 
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      )}
    </div>
  );
};

export default ProgrammingSkillsBrief;
