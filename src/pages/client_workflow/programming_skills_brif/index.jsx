import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { API_URL } from "../../../config";


const ProgrammingSkillsBrief = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [Saveprojectdetails, setprojectdetails] = useState([]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      axios
        .get(`${API_URL}/api/explore/project/technology/details/1`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          // alert(id);
          // alert("show categories");
          setprojectdetails(result.data);

          console.log("show details ", result);
          console.log("show details ", Saveprojectdetails);
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            alert(
              "Message: " + (err.response.message || err.response.statusText)
            );
          } else if (err.request) {
            alert("Message: No response from server. Please try again later.");
          } else {
            alert("Message: " + err.message);
          }
        });
    }
  }, []);

  return (
    <div className="programming-skills-brief-box m-4">
      {Saveprojectdetails.map((ele, index) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>FRONT END – {ele.frontend}</Card.Title>
                <Card.Title>BACK END – {ele.backend}</Card.Title>
                <Card.Title>DATABASE – {ele.database}</Card.Title>
                <Card.Title>AVG COST – {ele.avg_cost}</Card.Title>
                <Card.Title>DELIVERY TIME – {ele.delivery_time}</Card.Title>
                <Card.Title>OTHER VARIABLES {ele.other_variables}</Card.Title>
              </Card.Body>
            </Card>
            <Button className="bg-primary mt-3" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "Show Details"}
            </Button>
            {showDetails && (
              <p className="text-black mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            )}
          </>
        );
      })}
    </div>
  );
};

export default ProgrammingSkillsBrief;
