import React, { useState, useEffect } from "react";
import { MailCheck, Plane } from "lucide-react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import explorebanner from "../../../img/explore-banner.png"
import python from "../../../img/brands/python.png"
import html from "../../../img/brands/html.png"
import wp from "../../../img/brands/wordpress.png"
import Place_customization from "./place-customization/place_customization";

const companies = [
  {
    name: "Alpine Technologies",
    services: ["Web design", "App Design", "Marketing", "SEO", "AI Platform"],
    location: "Nagpur",
    type: "Full time",
    rating: 4.85,
    reviews: 1020,
    description:
      "Mollit in laborum tempor Lorem incididunt inure. Aute eu ex ad sunt.",
    image:
      "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
  },
  {
    name: "Himanshu Technologies",
    services: ["Web design", "App Design", "SEO", "AI Platform"],
    location: "Noida",
    type: "Full time",
    rating: 4.25,
    reviews: 800,
    description:
      "Mollit in laborum tempor Lorem incididunt inure. Aute eu ex ad sunt.",
    image:
      "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
  },
  {
    name: "Alpine Technologies",
    services: ["Web design", "App Design", "Marketing", "SEO", "AI Platform"],
    location: "Nagpur",
    type: "Full time",
    rating: 4.85,
    reviews: 1020,
    description:
      "Mollit in laborum tempor Lorem incididunt inure. Aute eu ex ad sunt.",
    image:
      "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
  },
  {
    name: "Himanshu Technologies",
    services: ["Web design", "App Design", "SEO", "AI Platform"],
    location: "Noida",
    type: "Full time",
    rating: 4.25,
    reviews: 800,
    description:
      "Mollit in laborum tempor Lorem incididunt inure. Aute eu ex ad sunt.",
    image:
      "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
  },
];

const Countrylistshimmer = () => {
  const mapped = Array.from({ length: 9 }).map((ele, index) => {
    return (
      <div key={index} className="">
        shimmer effect
      </div>
    );
  });
};

function ExplorePages() {
  return (
    <div>
      
      <div className="image-container">
        {/* <img
          src={explorebanner}
          class="img-fluid"
          alt="Responsive image"
        /> */}

        {/* <div className="overlay">
          <div className="overlay-content">
            <h1>Website Design</h1>
            <p>
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum
            </p>
          </div>
        </div> */}
      </div>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <h1 className="mb-5" style={{color:"#95cc8f"}}>
            Most Popular in{" "}
            <span style={{ color: "#0e8b00" }}> Website Design</span>
          </h1>

          <div className="row">
            <div className="col-md-3 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <a href="#" className="card" style={{textDecoration:"none"}}>
                <div className="card-body border rounded category-card bg-white">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={python} />
                    </div>

                    <div className="col-md-10">
                      <p
                        className="text-dark ml-5 mt-2"
                        style={{ fontSize: "13px" }}
                      >
                        <b>Development & IT</b>
                        <br />
                        1853 skills
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-3 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <a href="#" className="card " style={{textDecoration:"none"}}>
                <div className="card-body border rounded category-card bg-white">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={wp} />
                    </div>
                    <div className="col-md-10">
                      <p
                        className="text-dark ml-5 mt-2"
                        style={{ fontSize: "13px" }}
                      >
                        <b>Development & IT</b>
                        <br />
                        1853 skills
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-3 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <a href="#" className="card" style={{textDecoration:"none"}}>
                <div className="card-body  category-card bg-white border rounded">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={html} />
                    </div>
                    <div className="col-md-10">
                      <p
                        className="text-dark ml-5 mt-2"
                        style={{ fontSize: "13px" }}
                      >
                        <b>Development & IT</b>
                        <br />
                        1853 skills
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="col-md-3 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <a href="#" className="card" style={{textDecoration:"none"}}>
                <div className="card-body category-card bg-white border rounded">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={html} />
                    </div>
                    <div className="col-md-10">
                      <p
                        className="text-dark ml-5 mt-2"
                        style={{ fontSize: "13px" }}
                      >
                        <b>Development & IT</b>
                        <br />
                        1853 skills
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
           
          </div>

        </div>

        <div className="container mt-5 rounded " data-aos="fade-up">
          <div className="row">
            <div
              className="col-md-2 pt-4 pt-lg-0 order-2 order-lg-1 content"
            >
              <div className="filter-design rounded" style={{
                background: "#d0ffcb",
                padding: "15px",
              }}>

                <h6><strong>Website Design</strong></h6>

                <div className="d-flex flex-column">
                  <div>
                    <input type="radio" name="ui ux design" id="" />
                    &nbsp;
                    <label className="fs-6">UI/UX Design</label>
                  </div>
                  <div>
                    <input type="radio" name="ui ux design" id="" />
                    &nbsp;
                    <label>UI/UX Design</label>
                  </div>
                  <div>
                    <input type="radio" name="ui ux design" id="" />
                    &nbsp;
                    <label>UI/UX Design</label>
                  </div>
                  <div>
                    <input type="radio" name="ui ux design" id="" />
                    &nbsp;
                    <label>UI/UX Design</label>
                  </div>
                  <div>
                    <input type="radio" name="ui ux design" id="" />
                    &nbsp;
                    <label>UI/UX Design</label>
                  </div>
                </div>

                <div className="platform">
                  <div className="d-flex flex-column">
                    <select
                      name=""
                      id=""
                      className="py-1 platform-option"
                      value=""
                    >
                      <option value="platform">platform</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                    </select>
                    <select name="" id="" className="py-1 platform-option">
                      <option value="Tool">Tool</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                    </select>
                    <select name="" id="" className="py-1 platform-option">
                      <option value="Website type">Website type</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                    </select>
                    <select name="" id="" className="py-1 platform-option">
                      <option value="Service type">Service type</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                      <option value="first">first</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-8 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="filter-company d-flex justify-content-between">
                <h5>3177 Company Found</h5>
                <select name="filter price" id="" className="p-2">
                  <option value="Filter by">Filter by</option>
                  <option value="lowest to highest">lowest to highest</option>
                  <option value="highest to low">highest to low</option>
                </select>
              </div>

              <div className="filter-company-show">
                <div className="row">
                  {companies.map((ele, index) => (
                    <div className="col-md-6 mb-4 box-shadow" key={index}>
                      <div className="company-card p-3 shadow bg-light rounded">
                        <div className="d-flex align-items-center mb-2">
                          <div className="company-logo me-3">
                            <img src="company-logo.png" alt="Logo" width="50" />
                          </div>
                          <div>
                            <div className="company-name">{ele.name}</div>
                            <div className="services">
                              {ele.services.map((service, i) => (
                                <span
                                  key={i}
                                  className="m-1 text-white badge bg-secondary me-1"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                            <div className="location">
                              📍 {ele.location} • {ele.type}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <span className="rating">⭐ {ele.rating}/5</span>
                            <span className="text-muted">
                              {" "}
                              ({ele.reviews} Reviews)
                            </span>
                          </div>
                        </div>
                        <p>{ele.description}</p>
                        <div className="d-flex gap-2 flex-wrap">
                          <button className="btn btn-success m-1">Chat</button>
                          <button className="btn btn-success m-1">
                            Profile
                          </button>
                          <button className="btn btn-success m-1">
                            Place Order
                          </button>

                          <Place_customization />
                          
                          {/* <button className="  btn btn-success m-1">
                            Place Order with customization
                          </button> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* {
                   !companies.length ? (
                   <Countrylistshimmer />
                  ) :(
                  <CompanyCard />
                )}  */}
              </div>
            </div>

            <div class="border border-1 p-3 col-md-2 order-2 order-lg-1 content">
              <div className="emailforjob">
                <span className="d-flex justify-content-between">
                  <MailCheck />
                  <h6>
                    <strong>Email me for jobs</strong>
                  </h6>
                </span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <input
                  className="border-0 shadow p-2 w-100 rounded "
                  type="text"
                  name=""
                  id=""
                  placeholder="name@mail.com"
                />
                <button class="w-100 btn btn-success my-3">Subscribe</button>
              </div>

              <div className="emailforjob">
                <span className="d-flex justify-content-between">
                  <Plane />
                  <h6>
                    <strong>Get noticed faster</strong>
                  </h6>
                </span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <button class="w-100 btn btn-success my-3">
                  Upload your resume
                </button>
              </div>
            </div>

            {/* <button className="">next</button> */}

          </div>
        </div>
      </section>
    </div>
  );
}

export default ExplorePages;
