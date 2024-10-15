import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { API_URL } from "../../../config";


const ProgrammingSkillsBrief = ({setStep,step}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [Saveprojectdetails, setprojectdetails] = useState([]);

  const stepchange = () => {
    setStep(step+1);
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
    <div className="programming-skills-brief-box">
      {Saveprojectdetails.map((ele, index) => {
        return (
          <>
            <Card style={{ background:"transparent",border:"1px solid gray" }} className="p-3 m-5 shadow w-50">
              <Card.Body>
                <h4 className="text-black p-3">Project setup details</h4>
                <Card.Title className="text-dark shadow p-4 rounded" style={{background:"#d4ffcf"}}>FRONT END – {ele.frontend}</Card.Title>
                <Card.Title className="text-dark shadow p-4 rounded" style={{background:"#d4ffcf"}}>BACK END – {ele.backend}</Card.Title>
                <Card.Title className="text-dark shadow p-4 rounded" style={{background:"#d4ffcf"}}>DATABASE – {ele.database}</Card.Title>
                <Card.Title className="text-dark shadow p-4 rounded" style={{background:"#d4ffcf"}}>AVG COST – {ele.avg_cost}</Card.Title>
                <Card.Title className="text-dark shadow p-4 rounded" style={{background:"#d4ffcf"}}>DELIVERY TIME – {ele.delivery_time}</Card.Title>
                <Card.Title className="text-dark shadow p-4 rounded" style={{background:"#d4ffcf"}}>OTHER VARIABLES {ele.other_variables}</Card.Title>
              </Card.Body>
            </Card>
            <button className="freelancer-dark-btn mt-3" onClick={stepchange}>
              Next 
            </button>
              
            {/* {showDetails && (
              ele.multipleimagesvideos.map((ele)=>{
                return(
                  <>
                      <img src={ele.images} />
                  </>
                )
              })
            )} */}
          </>
        );
      })}
    </div>
  );
};

export default ProgrammingSkillsBrief;
