import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import person from "../img/person-with-headset.webp";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Wallpaper from "../components/Wallpaper";
import Mainheading from "../components/Mainheading";
import process from "../img/Process.png";
import Buttton from "../components/Buttton";
import Icon from "../img/Icon.png";
import Category_card from "../components/Category_card";
import Slidercard from "../components/Slidercard";
import arrow_icon from "../img/arrow-right.png";
import Brand_card from "../components/Brand_carousal";
import gif_banner_01 from "../../src/img/2733655-removebg-preview.png";
import ProjectSelection from "./client_workflow/ProjectSelection";
import image_other from "../../src/img/find-great-work.webp";
import Button from "../components/Buttton";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <main id="main">
        <section id="about" className="about bg-white">
          {/* <!---upyour work game --> */}

          <div className="upwork-game-container container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1 d-flex align-items-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src={gif_banner_01} className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content">
                <div className="section-title">
                  <Mainheading title="Up your work game it’s easy" />
                </div>

                <h4 className="font-italic">No cost to join</h4>
                <p>
                  Register and browse professionals, explore projects, or even
                  book a consultation.
                </p>

                <h4 className="font-italic">Post a job and hire top talent</h4>
                <p>
                  Finding talent doesn’t have to be a chore. Post a job or we
                  can search for you!.
                </p>

                <h4 className="font-italic">
                  Work with the best— without breaking the bank
                </h4>
                <p>
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </p>

                <div>
                  <Buttton
                    title="Sign Up For Free"
                    classname="freelancer-dark-btn"
                  />
                  &nbsp; &nbsp; &nbsp;
                  <Buttton
                    title="More About details"
                    classname="freelancer-light-btn"
                  />
                </div>

                {/* <!---end upyour work game --> */}
              </div>
            </div>
          </div>

          {/* <!---video section start --> */}
          {/* <div
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

          {/* <!---end video section start --> */}

          {/* <!---How it works --> */}
          <div className=" container mt-5 how-it-works" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 text-center content">
                <Mainheading title="How it works?" textalign="center" />

                <div className="card-deck text-center">
                  <img src={process} className="img-fluid foreground-image" />
                </div>
              </div>
            </div>
          </div>

          {/* <!---category --> */}
          {/* <div className="container mt-5" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div className="w-100 d-flex justify-content-md-between">
                <Mainheading  title="Browse talent by" subtitle="category" textalign="start"/>
                <button className="p-2 border-0">Browse All <img src={arrow_icon} /></button>
                </div>

                <div className="all-category mb-2">

                  <Category_card img={Icon} 
                  maintitle="Development & IT" 
                  skillscounter="1853 skills"
                  rating="4.85/5"
                  />

                  <Category_card img={Icon} 
                  maintitle="Development & IT" 
                  skillscounter="1853 skills"
                  rating="4.85/5"
                  />

<Category_card img={Icon} 
                  maintitle="Development & IT" 
                  skillscounter="1853 skills"
                  rating="4.85/5"
                  />

<Category_card img={Icon} 
                  maintitle="Development & IT" 
                  skillscounter="1853 skills"
                  rating="4.85/5"
                  />

<Category_card img={Icon} 
                  maintitle="Development & IT" 
                  skillscounter="1853 skills"
                  rating="4.85/5"
                  />

<Category_card img={Icon} 
                  maintitle="Development & IT" 
                  skillscounter="1853 skills"
                  rating="4.85/5"
                  />

                </div>
              </div>
            </div>
          </div> */}
          <div className="container mt-5" data-aos="fade-up">
            <ProjectSelection />
          </div>
          {/* <!--- other section --> */}
          <div className="other-section container px-4 my-5">
            <div className="row align-items-center">
              <img src={person} className="other-section-img" />
              <div className="col-md-6">
                <div className="text-black p-4 rounded">
                  <Mainheading title="this is heading" />
                  <p className="lead py-2">
                    Access the top 1% of talent on Upwork, and a full suite of
                    hybrid workforce management tools.
                  </p>
                  <ul className="list-unstyled">
                    <li className="py-3">
                      <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg" />{" "}
                      Access expert talent to fill your skill gaps
                    </li>
                    <li className="py-3">
                      <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg" />{" "}
                      Control your workflow: hire, classify and pay your talent
                    </li>
                    <li className="py-3">
                      <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg" />{" "}
                      Control your workflow: hire, classify and pay your talent
                    </li>
                    <li className="py-3">
                      <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg" />{" "}
                      Control your workflow: hire, classify and pay your talent
                    </li>
                    <li className="py-3">
                      <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg" />{" "}
                      Control your workflow: hire, classify and pay your talent
                    </li>
                  </ul>
                  <Buttton title="learn More" classname="freelancer-dark-btn" />
                </div>
              </div>
              <div className="col-md-6 p-1 ">
                <img
                  src={image_other}
                  alt="Person in wheelchair"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
          {/*<!--- find talent section --> */}

          <div className="find-talent-container container px-4 my-5">
            <div className="row align-items-center">
              <div className="row">
                <div className="col-12">
                  <div className="text-black p-4 rounded">
                    <Mainheading title="Find talent your way" />
                    <p className="lead py-2">
                      Work with the largest network of independent professionals
                      and get things done—from quick turnarounds to big
                      transformations.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 mb-4">
            <div class="section-card">
                <h4>Post a job and hire a pro</h4>
                <p><a href="#" class="custom-link">Talent Marketplace™ &rarr;</a></p>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="section-card">
                <h4>Browse and buy projects</h4>
                <p><a href="#" class="custom-link">Project Catalog™ &rarr;</a></p>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="section-card">
                <h4>Get advice from an industry expert</h4>
                <p><a href="#" class="custom-link">Consultations &rarr;</a></p>
            </div>
        </div>

              </div>
            </div>
          </div>

          {/* <!---testimonial slider --> */}

          <div className="testimonial-container p-5" data-aos="fade-up">
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <Mainheading title="Clients Testimonial" textalign="center" />
                  <div className="p-5">
                    <Slidercard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <Wallpaper />
              </div>
            </div>
          </div> */}

          {/* <!---brand section  --> */}

          <div className="container mt-5">
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
    </div>
  );
}

export default Home;
