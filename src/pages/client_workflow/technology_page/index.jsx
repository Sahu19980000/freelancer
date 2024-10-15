import React from "react";
import Mainheading from "../../../components/Mainheading";
import "./technology.css";
import Js from "../../../img/Icon-2.png";
import second_img from "../../../img/Col.png";
import VideoPlayer from "./videoplayer";

const Technology_page = () => {
  return (
    <div className="technology_container">
      <section className="most-categories">
        <div className="container">
          <Mainheading title="Most Popular in Website Design" />
          <div className="row">
            <div className="col-md-3 col-12">
              <div className="landing-card-section">
                <div
                  className="col-lg-12 col-md-12 col-6 my-1 mx-1 text-black rounded p-0"
                  style={{ cursor: "pointer", margin: "10px" }}
                >
                  <div className="landing-card-content d-md-flex justify-content-between">
                    <img src={Js} className="" />
                    <div>
                      <h2 className="card-title h5 text-start text-black">
                        UI/UX Design
                      </h2>
                      <div className="w-100 d-flex justify-content-between">
                        <div className="skills">
                          <span>1853 skills</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="landing-card-section">
                <div
                  className="col-lg-12 col-md-12 col-6 my-1 mx-1 text-black rounded p-0"
                  style={{ cursor: "pointer", margin: "10px" }}
                >
                  <div className="landing-card-content d-md-flex justify-content-between">
                    <img src={Js} className="" />
                    <div>
                      <h2 className="card-title h5 text-start text-black">
                        UI/UX Design
                      </h2>
                      <div className="w-100 d-flex justify-content-between">
                        <div className="skills">
                          <span>1853 skills</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="landing-card-section">
                <div
                  className="col-lg-12 col-md-12 col-6 my-1 mx-1 text-black rounded p-0"
                  style={{ cursor: "pointer", margin: "10px" }}
                >
                  <div className="landing-card-content d-md-flex justify-content-between">
                    <img src={Js} className="" />
                    <div>
                      <h2 className="card-title h5 text-start text-black">
                        UI/UX Design
                      </h2>
                      <div className="w-100 d-flex justify-content-between">
                        <div className="skills">
                          <span>1853 skills</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3 col-12">
              <div className="landing-card-section">
                <div
                  className="col-lg-12 col-md-12 col-6 my-1 mx-1 text-black rounded p-0"
                  style={{ cursor: "pointer", margin: "10px" }}
                >
                  <div className="landing-card-content d-md-flex justify-content-between">
                    <img src={Js} className="" />
                    <div>
                      <h2 className="card-title h5 text-start text-black">
                        UI/UX Design
                      </h2>
                      <div className="w-100 d-flex justify-content-between">
                        <div className="skills">
                          <span>1853 skills</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="second-part my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src={second_img} className="img-fluid" />
            </div>

            <div className="col-md-6 col-12">
              <Mainheading title="Most Popular in Website Design" />
              <p>
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
              <ul class="checklist my-2" >
                <li >
                  <span class="icon my-3">✔️</span> Complete everything as ordered
                </li>
                <li>
                  <span class="icon my-3">✔️</span> Provide your last{" "}
                  <strong>603.34 × 32.45</strong>
                </li>
                <li>
                  <span class="icon my-3">✔️</span> Choose your desired program
                </li>
                <li>
                  <span class="icon my-3">✔️</span> Get contact with the instructor
                </li>
                <li>
                  <span class="icon my-3">✔️</span> Finally get started your program
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="video-part py-5">
        <VideoPlayer />
      </section>
    </div>
  );
};

export default Technology_page;
