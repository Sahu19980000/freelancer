import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Mainheading from "../../components/Mainheading";
import Brand_card from "../../components/Brand_carousal";
import Howshouldwork from "./howshouldwork";
import "./home.css";
import Whychoose from "./why-choose";
import Popularservices from "./popular-services";
import Joinvideosection from "./join-video-section";
import TestimonialSection from "./TestimonialSection";
import image_bg from "../../img/vector-1.jpg"

function Home() 
{
  return (
    <>
      <Header />
      <Howshouldwork />
      <main id="main">
        <section id="about" className="about bg-white">
          {/* <!---upyour work game --> */}

          {/* <!--popular services --> */}
          <Whychoose />
          <Popularservices />

          {/* <!---video section start --> */}
          
          {
          /* <div
            className="container-fluid"
            data-aos="fade-up"
            style={{ background: "#0800CF" }}
          >
            <div className="container py-2">
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                title="video"
              ></iframe>
            </div>
          </div> */}

          <Joinvideosection />

          {/* <!---end video section start --> */}

          {/* <!--- other section --> */}

          <div class="find-talent-way-container">
            {/* <img src={image_bg} className="find-talent-overlay-img img-fluid" /> */}
          <div class="row">
            <div class="col-12">
                <div class="">
                  <Mainheading title="Find talent your way" color="#fff" />
                   
                    <p className="text-white find-talent-para">Work with the largest network of independent professionals and get things done—from quick
                        turnarounds to big transformations.</p>
                    <div class="row">
                        <div class="col-md-4 col-12 my-3">
                                <div class="card-body-section">
                                    <p class="card-title-talent">Post a job and hire a professional</p>
                                    <p class="card-text-talent">Talent Marketplace™ </p>
                                </div>
                        </div>
                        <div class="col-md-4 col-12 my-3">
                                <div class="card-body-section">
                                    <p class="card-title-talent">Browse and buy some projects</p>
                                    <p class="card-text-talent">Talent Marketplace™ </p>
                                </div>
                        </div>
                        <div class="col-md-4 col-12 my-3">
                                <div class="card-body-section">
                                    <p class="card-title-talent">Post a job and hire a professional</p>
                                    <p class="card-text-talent">Talent Marketplace™ </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </div>

          {/* <!---testimonial slider --> */}
         <TestimonialSection />
          
          {/* 

          {/* <!---brand section  --> */}

          <div className="container mt-5 py-5">
            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <Brand_card />
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
