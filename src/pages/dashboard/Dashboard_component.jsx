import React from "react";
import Brand_card from "../../components/Brand_carousal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile_section from "./Profile_section";
import search_icon from "../../img/search_icon.png"
import Card_box from "./Card_box";

const Dashboard_component = () => {
  return (
    <div>
      <Header />
      <div className="image-container">
        <img
          src="https://t4.ftcdn.net/jpg/07/54/30/09/360_F_754300903_uDoDl2d1p3RJlDoaIoNcmWPrychL8Gsx.jpg"
          class="img-fluid"
          alt="Responsive image"
        />
        <div className="overlay">
          <div className="overlay-content">
            <h1 className="mt-5">Tell us what you are looking for,</h1>
            <h1>
              We'll{" "}
              <span style={{ color: "rgb(8, 0, 207)" }}>find the talent</span>
            </h1>
            <p>
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum
            </p>

            <div className="card-deck mt-5" style={{ marginTop: "300px;" }}>
              <a href="#" className="card">
                <Profile_section title="my order"/>
              </a>
              <a href="#" className="card">
                <Profile_section title="my project"/>
              </a>

              <a href="#" className="card">
                <Profile_section title="explore project"/>
              </a>

              <a href="#" className="card">
                <Profile_section title="post a project"/>
              </a>
            
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="about">
        <div className="container mt-5 " data-aos="fade-up">
          <div className="row my-5">
            <div className="col-md-6 col-12">
               <h2>Recent View </h2>
            </div>

            <div className="col-md-6 col-12 py-4">
               <div className="search_box">
               <img src={search_icon} />
               <input type="text" name="" id="search_icon" placeholder="Search your company here " />
               </div>
            </div>

            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="card-deck mb-2">
                <Card_box title="ggg"/>
                <Card_box />
              </div>
            </div>

            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="card-deck mb-2">
                <Card_box />
                <Card_box />
              </div>
            </div>

            
          </div>
        </div>
        <br />
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
      <Footer />
    </div>
  );
};

export default Dashboard_component;
