import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function AbouUs() {
  
  return (
    <>
      <div>
        <Header />
        <main id="main">
          <div className="image-container">
            <img
              src="https://sierraproductions1.com/wp-content/uploads/2021/12/network-gb56a1c2b6_1920-1024x427.jpg"
              class="img-fluid"
              alt="Responsive image"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h1>About Us</h1>
                <p>
                  Aliquam vitae turpis in diam convallis finibus in at risus.
                  Nullam in scelerisque leo, eget sollicitudin velit bestibulum
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-5 mb-5" data-aos="">
            <div className="section-title">
              <p></p>
            </div>

            <div className="row">
              <div
                className="col-lg-6  order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content text-dark">
                <h1 className="mb-5">
                  <span style={{ color: "#0800CF" }}>About Us</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p>
                  Finding talent doesn’t have to be a chore. Post a job or we
                  can search for you!.
                </p>

                <p>
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </p>

                <p>
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </p>

                <p>
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AbouUs;
