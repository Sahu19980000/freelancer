import React, { useState, useEffect } from "react";
import axios from "axios";
import card_one from "../../img/3D Design.webp";

function ProjectCategoriesOptions({ id, Setid }) {
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
          alert(id);
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
    alert(index);
  };

  return (
    <div>
      <section id="about" className="about">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 order-2 order-lg-1 content">
              <div className="card-deck">
                {subcategories.map((ele, index) => {
                  return (
                    <>
                      {/* <button
                        id={index}
                        className="bg-primary border-0 text-white m-4 p-2 rounded"
                        onClick={() => handleSelect(++index)}
                      >
                        {ele.name}


                      </button> */}
                      <div
                        key={index}
                        className="col-md-3 col-12 card-container mx-2 my-2 bg-success text-white rounded p-3"
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
                          onClick={() => handleSelect(++index)}
                        >
                          Select Categories
                        </button>
                      </div>
                    </>
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
