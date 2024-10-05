import axios from "axios";
import React, { useEffect, useState } from "react";
import card_one from "../../img/3D Design.webp";
import Mainheading from "../../components/Mainheading";

const ProjectSelection = ({ id, Setid, setStep, step }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://ubm.annapurnadhamagro.com/api/explore/project", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setCategories(response.data);
          console.log("response categories", response);
        })
        .catch((error) => {
          console.error(error);

          if (error.response) {
            alert(
              `Message: ${
                error.response.data.message || error.response.statusText
              }`
            );
          } else if (error.request) {
            alert("Message: No response from server. Please try again later.");
          } else {
            alert(`Message: ${error.message}`);
          }
        });
    }
  }, []);

  const handleSelect = (index) => {
    Setid(index);
    // alert(index);
    setStep(step + 1);
    // alert(step);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-4">
          <Mainheading title="Browse by category" />
        </div>
        <div className="card-container">
          {categories.map((category, index) => (
            <div className="card-section ">
              <div
                key={index}
                className="col-lg-12 col-md-12 col-6 my-1 mx-1 text-black rounded p-0"
                onClick={() => handleSelect(category.id)}
                style={{ cursor: "pointer", margin: "10px" }}
              >
                <div className="card-content">
                  <h3 className="card-title text-center text-black font-weight-normal">{category.name}</h3>
                  <div className="w-100 d-flex justify-content-between">
                    {/* <div className="rating">
                      <span>4.8/5</span>
                    </div>
                    <div className="skills">
                      <span>1853 skills</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSelection;
