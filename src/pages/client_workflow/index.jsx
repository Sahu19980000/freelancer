import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Allprocess from "./all_process";
import bg_image from "../../../src/img/bg-gif.gif"
import export_banner from "../../img/explore-banner.png";

function ExplorePages() {
  return (
    <div>
      <Header />
      <div className="image-container">
        <img
          src={export_banner}
          class="img-fluid"
          alt="Responsive"
        />
        {/* <div className="overlay">
          <div className="overlay-content">
            <h1 style={{fontSize:"48px"}}>Explore Project</h1>
          </div>
        </div> */}
      </div>
      <section id="about" className="about ">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="d-flex justify-content-end ">
              <img src={bg_image} className="client-web-bg p-4"/>
              </div>
              
              <div>
              <Allprocess />
              </div>

              {/* <Outlet /> */}
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ExplorePages;
