import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Wallpaper from "../components/Wallpaper";
import Mainheading from "../components/Mainheading";
import process from "../img/Process.png"
import Buttton from "../components/Buttton";
import Icon from "../img/Icon.png"
import Category_card from "../components/Category_card";
import Slidercard from "../components/Slidercard";
import arrow_icon from "../img/arrow-right.png"
import Brand_card from "../components/Brand_carousal";

function Home() {
 
  return (
    <div>
      <Header />
      <Banner />
      <main id="main">
        <section id="about" className="about bg-white">

          {/* <!---upyour work game --> */}

          <div className="container my-4" data-aos="fade-up">
            <div className="section-title">
            <Mainheading  title="Up your work game" subtitle="it’s easy"/>
            </div>

            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/02.png" className="img-fluid" alt="" />
              </div>
              
              
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                
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
                   <Buttton title="Sign Up For Free" classname="freelancer-light-btn"/>&nbsp;
                   <Buttton title="Sign Up For Free" classname="freelancer-dark-btn"/>
                </div>
                
              </div>

              {/* <!---end upyour work game --> */}

            </div>
          </div>

           {/* <!---video section start --> */}
          <div
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
          </div>

           {/* <!---end video section start --> */}


          {/* <!---How it works --> */}
          <div className="container mt-5" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 text-center content">

                <Mainheading  title="How it" subtitle="works?" textalign="center"/>

                <div className="card-deck text-center">
                   <img src={process} className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>

          {/* <!---category --> */}
          <div className="container mt-5" data-aos="fade-up">
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
          </div>

          {/* <!---testimonial slider --> */}

          <div className="testimonial-container " data-aos="fade-up">
          <div className="container mt-5" >
            <div className="row">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">

                <Mainheading  title="Clients" subtitle="Testimonial" textalign="center"/>
                 <div className="py-3">
                 <Slidercard />
                 </div>
                 
              </div>
            </div>
          </div>
          </div>
          

          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <Wallpaper />
              </div>
            </div>
          </div>

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
