import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

function ProjectCategoriesOptions({ id }) {
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
          
          console.log('sub categories ',result);
          
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
    setSelected(type);
    //  Setid(index);
  };


  return (
    <div>
      <section id="about" className="about">
        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h1 className="mb-5">Sub Categories Selection</h1>

              <div className="card-deck mb-2">
                {subcategories.map((ele, index) => {
                  return (
                    <>
                      <button
                        id={index}
                        className="bg-primary border-0 text-white m-4 p-2 rounded"
                        onClick={() => handleSelect(index)}
                      >
                        {ele.name}
                      </button>
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
