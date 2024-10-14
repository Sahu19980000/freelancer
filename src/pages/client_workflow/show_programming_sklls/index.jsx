import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../components/Buttton";
import { API_URL } from "../../../config";
import card_one from "../../../img/3D Design.webp"

const Programming_skills = ({ planmakeid, plan_type,Setid ,id }) => {
  const [show_language, Setlanguage] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      axios
        .get(
          `${API_URL}/api/explore/project/types/checklist/tech/${planmakeid}/${plan_type}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((result) => {
          alert(id);
          alert("show categories");
          Setlanguage(result.data);

          console.log("show language ", result);
          console.log("show language ", show_language);
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

  const handleSelect = (index) => {
    Setid(index);
    alert(index);
  };

  return (
    <div className="programing_skills_box d-flex flex-column ">
      <div className="p-4">
        <h2>Programming Language Select</h2>
      </div>
      <div className="container">
        <div className="row">
          {show_language.map((ele,index) => {
            return (
              <div
                key={index}
                className="col-md-3 col-12 card-container border border-dark rounded p-3 m-2"
              >
                <div className="card-content p-4 " id={index} onClick={() => handleSelect(index)}>
                  <h5 className="card-title text-dark">{ele.name}</h5>
                </div>
                {/* <button
                  id={index}
                  className="bg-primary border-0 text-white m-4 p-2 rounded"
                  
                >
                  Select Language
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programming_skills;
