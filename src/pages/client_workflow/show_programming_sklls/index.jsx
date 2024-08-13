import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../components/Buttton";
import { API_URL } from "../../../config";
import card_one from "../../../img/3D Design.webp"

const Programming_skills = ({ planmakeid, plan_type }) => {
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
          // alert(id);
          // alert("show categories");
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
    // Setid(index);
  };

  return (
    <div className="programing_skills_box d-flex flex-column ">
      <div className="p-4">
        <h2>Programming Language Select</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          {show_language.map((ele,index) => {
            return (
              <div
                key={index}
                className="col-md-3 col-12 card-container mx-2 my-4 bg-success text-white rounded p-3"
              >
                <div className="card-content">
                  <h5 className="card-title ">{ele.name}</h5>
                  <div className="card-image-container">
                    <img
                      src={card_one} // Assuming ele.image_url contains the image URL
                      alt={ele.name}
                      className="card-image img-fluid"
                    />
                  </div>
                </div>
                <button
                  id={index}
                  className="bg-primary border-0 text-white m-4 p-2 rounded"
                  onClick={() => handleSelect(index)}
                >
                  Select Language
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programming_skills;
