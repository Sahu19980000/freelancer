import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MultiStepForm from "./multi_step";

function ExplorePages() {
  
  return (
    <div>
      <Header />
      <div className="image-container">
        <img
          src="assets/img/explore.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <div className="overlay">
          <div className="overlay-content">
            <h1>Website Design</h1>
            <p>
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum
            </p>
          </div>
        </div>
      </div>
      <section id="about" className="about">
        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h1 className="mb-5">
                Select client flow
              </h1>
              <div>
              <MultiStepForm />
              </div>
            

              {/* <div className="card-deck mb-2">
                
                <Link to="/explorepage/subcategories" className="card">
                <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <i
                          className="ri-terminal-window-fill text-center"
                          style={{ fontSize: "40px", color: "#0800CF" }}
                        />
                      </div>
                      <div className="col-md-10">
                        
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >

                          <b>Development & IT</b>
                          <br />
                          1853 skills
                          <br />
                          <span style={{ color: "#C39E1C" }}>
                            <i class="ri-star-s-fill">4.85/5</i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                <a href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <i
                          className="ri-slideshow-3-line text-center"
                          style={{ fontSize: "40px", color: "#0800CF" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <b>AI Services</b>
                          <br />
                          1853 skills
                          <br />
                          <span style={{ color: "#C39E1C" }}>
                            <i class="ri-star-s-fill">4.85/5</i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <i
                          className="ri-artboard-line text-center"
                          style={{ fontSize: "40px", color: "#0800CF" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <b>Design & Creative</b>
                          <br />
                          1853 skills
                          <br />
                          <span style={{ color: "#C39E1C" }}>
                            <i class="ri-star-s-fill">4.85/5</i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <i
                          className="ri-hand-coin-line text-center"
                          style={{ fontSize: "40px", color: "#0800CF" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <b>Sales & Marketing</b>
                          <br />
                          1853 skills
                          <br />
                          <span style={{ color: "#C39E1C" }}>
                            <i class="ri-star-s-fill">4.85/5</i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div> */}
              <Outlet />
            </div>
            
          </div>
        </div>

        {/* <div className="container mt-5" data-aos="fade-up">
          <div className="section-title">
            <p></p>
          </div>

          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <img src="assets/img/03.png" className="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h1>
                Lorem Ipsum dolot <br />
                <span style={{ color: "#0800CF" }}>Sit amet</span>
              </h1>
              <p class="font-italic" style={{ marginTop: "50px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul style={{ marginTop: "50px" }}>
                <li>
                  <i class="icofont-check-circled"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row mt-5">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h1>
                Lorem Ipsum dolot <br />
                <span style={{ color: "#0800CF" }}>Sit amet</span>
              </h1>
              <p class="font-italic" style={{ marginTop: "50px" }}>
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam Aliquam vitae turpis in diam convallis finibus in at
                risus. Nullam in scelerisque leo, eget sollicitudin velit
                bestibulum. in scelerisque leo, eget sollicitudin velit
                bestibulum
              </p>
              <p class="font-italic" style={{ marginTop: "50px" }}>
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam Aliquam vitae turpis in diam convallis finibus in at
                risus. Nullam in scelerisque leo, eget sollicitudin velit
                bestibulum. in scelerisque leo, eget sollicitudin velit
                bestibulum
              </p>
            </div>

            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <img
                src="assets/img/04.png"
                className="img-fluid"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <img src="assets/img/05.png" className="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h1>
                Lorem Ipsum dolot <br />
                <span style={{ color: "#0800CF" }}>Sit amet</span>
              </h1>
              <p class="font-italic" style={{ marginTop: "50px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul style={{ marginTop: "50px" }}>
                <li>
                  <i class="icofont-check-circled"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="icofont-check-circled"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div
            className="container "
            data-aos="fade-up"
            style={{ background: "#0800CF" }}
          >
            <div className="container2">
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="video"
              ></iframe>
            </div>
          </div>
        </div> */}
      </section>
      <Footer />
    </div>
  );
}

export default ExplorePages;
