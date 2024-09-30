import React, { useState, useEffect } from "react";
import axios from "axios";
import card_one from "../../img/3D Design.webp";
import Mainheading from "../../components/Mainheading";

function ProjectCategoriesOptions({ id, Setid,setStep,step }) {
  const [subcategories, Setsubcategories] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios
        .get(
          `https://ubm.annapurnadhamagro.com/api/explore/project/types/${id}`,
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
          Setsubcategories(result.data);

          console.log("sub categories ", result);
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
    // setSelected(type);
    Setid(index);
    setStep(step+1);
  };

  return (
    <div>
      <section id="about" className="about">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 order-2 order-lg-1 content my-2">
              <div className="my-4">
              <Mainheading title="Browse by Web Devlopement" color="#06d001" />
              </div>
             
              <div className="card-deck">
                {subcategories.map((ele, index) => {
                  return (
                    <div className="card-section ">
                      <div
                        key={index}
                        className="col-lg-12 col-md-12 col-sm-12 col-12 mx-1 text-black rounded p-3"
                        onClick={() => handleSelect(ele.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="card-content">
                          <h5 className="card-title text-black">{ele.name}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* 
                <Link to="/explorepage/subcategories" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>BUSINESS_WEB_APPLICATION</h6>
                      </div>
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectCategoriesOptions;
