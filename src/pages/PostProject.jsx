import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Icon from "../img/Icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mainheading from "../components/Mainheading";
import Button from "../components/Buttton";
import Category_card from "../components/Category_card";

function PostProject() {
  const [uploadFile, Setfileupload] = useState("attach your file here");

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    uname: "",
    pwd: "",
    cpwd: "",
    fname: "",
    lname: "",
    phno: "",
    phno_2: "",
    holdername: "",
    cardno: "",
    cvcpwd: "",
    expmonth: "",
    expyear: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const get_value = (e) => {
    Setfileupload(e.target.files[0].name);
  };

  const cancel = () => {
    <NavLink to="/" />;
  };

  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (!storedToken) {
  //     // navigate("/login");
  //   } else {
  //     setToken(storedToken);
  //   }
  // }, [navigate]);

  return (
    <>
      <div>
        <Header />
        <main id="main">
          <section id="post-project" className="post-project-section">
            <div className="container" id="grad1">
              <div className="row justify-content-center mt-0">
                <div className="col-md-12 mt-3 mb-2">
                  <div className="px-0 pt-4 pb-0 mt-3 mb-3">
                    <form id="msform" onSubmit={handleSubmit} className="">
                      {step === 1 && (
                        <fieldset>
                          <div className="row shadow">
                            <div className="col-lg-6 pt-lg-0 content">
                              <div className="">
                                <div className="card-body">
                                  <img src={Icon} />

                                  <form>
                                    <Mainheading
                                      title="Post a project"
                                      color="#000"
                                      size="center"
                                    />

                                    <p className="text-center">
                                      Lorem Ipsum is simply dummy text.{" "}
                                    </p>

                                    <div class="form-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="I want to create new project."
                                      />
                                      <small
                                        id="emailHelp"
                                        className="form-text text-muted"
                                      >
                                        <br />
                                        OR
                                        <select className="form-control form-control-sm mt-2">
                                          <option>
                                            Rework on Previous Project
                                          </option>
                                          <option>A</option>
                                          <option>B</option>
                                          <option>C</option>
                                          <option>D</option>
                                        </select>
                                      </small>
                                    </div>

                                    <div class="form-group"></div>

                                    <div className="d-flex">
                                      <a
                                        href="https://accounts.google.com/InteractiveLogin/signinchooser?ifkv=AaSxoQw4zKLGl-5I_GvZb6GlK5-Yw29j9rZbm0gemRPdMCA3euUUC4P0pCsg1amz1pqSuOwh_h6KDw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                        target="_blank"
                                      >
                                        <Button
                                          title="Cancel"
                                          classname="freelancer-light-btn mx-5 px-2 p-0 shadow w-50 h6 font-weight-bold"
                                          onclick={cancel}
                                        />
                                      </a>
                                      <a
                                        href="https://accounts.google.com/InteractiveLogin/signinchooser?ifkv=AaSxoQw4zKLGl-5I_GvZb6GlK5-Yw29j9rZbm0gemRPdMCA3euUUC4P0pCsg1amz1pqSuOwh_h6KDw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                        target="_blank"
                                      >
                                        <Button
                                          title="Continue"
                                          classname="freelancer-dark-btn mx-2 px-2 p-0 shadow w-100 h6 font-weight-bold"
                                          onclick={nextStep}
                                        />
                                      </a>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div class="col-lg-6 pt-4 pt-lg-0 post-project-right">
                              {/* <img
                                src="assets/img/postproject.png"
                                className="img-fluid"
                                alt=""
                              /> */}
                            </div>
                          </div>
                        </fieldset>
                      )}

                      {step === 2 && (
                        <div className="post_project_container">
                          <div className="row">
                            <div className="col-md-8">
                            <fieldset>
                            <div className="form-card r-5 ml-5">
                              <Mainheading
                                title="Post a project"
                                color="#000000"
                                size="32px"
                              />
                              <p>Select project categories</p>
                              <nav class="navbar">
                                <form class="form-inline">
                                  <input
                                    class="form-control mr-sm-2 w-100"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                  />
                                  
                                </form>
                              </nav>

                              <div className="all-category mb-2">
                                <Category_card
                                  img={Icon}
                                  maintitle="Development & IT"
                                  skillscounter="1853 skills"
                                  rating="4.85/5"
                                />

                                <Category_card
                                  img={Icon}
                                  maintitle="Development & IT"
                                  skillscounter="1853 skills"
                                  rating="4.85/5"
                                />

                                <Category_card
                                  img={Icon}
                                  maintitle="Development & IT"
                                  skillscounter="1853 skills"
                                  rating="4.85/5"
                                />

                                <Category_card
                                  img={Icon}
                                  maintitle="Development & IT"
                                  skillscounter="1853 skills"
                                  rating="4.85/5"
                                />

                                <Category_card
                                  img={Icon}
                                  maintitle="Development & IT"
                                  skillscounter="1853 skills"
                                  rating="4.85/5"
                                />

                                <Category_card
                                  img={Icon}
                                  maintitle="Development & IT"
                                  skillscounter="1853 skills"
                                  rating="4.85/5"
                                />
                              </div>

                              <div
                                style={{ marginRight: "880px" }}
                                className="mb-5 mt-5 d-flex"
                              >
                                <Button
                                  title="previous"
                                  classname="freelancer-dark-btn"
                                  onclick={prevStep}
                                ></Button>
                                &nbsp;&nbsp;
                                <Button
                                  title="Continue"
                                  classname="freelancer-dark-btn"
                                  onclick={nextStep}
                                ></Button>
                              </div>
                            </div>
                          </fieldset>
                            </div>
                            <div class="col-md-4 pt-4 pt-lg-0 post-project-right">
                              {/* <img
                                src="assets/img/postproject.png"
                                className="img-fluid"
                                alt=""
                              /> */}
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <fieldset>
                          <div className="form-card mr-5 ml-5">
                            <Mainheading
                              title="Post a project"
                              classname="freelancer-dark-btn"
                              color="#0800CF"
                              size="38px"
                            />

                            <Mainheading
                              title="Basic Feature"
                              classname="freelancer-dark-btn"
                              size="28px"
                            />

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label text-dark"
                                for="defaultCheck1"
                              >
                                <p>
                                  Aliquam vitae turpis in diam convallis finibus
                                  in at risus. Nullam in scelerisque leo, eget
                                  sollicitudin velit bestibulum.
                                </p>

                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                </p>

                                <p>
                                  {" "}
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy.
                                </p>
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label text-dark"
                                for="defaultCheck1"
                              >
                                <p>
                                  Various versions have evolved over the years,
                                  sometimes by accident, sometimes on purpose
                                  (injected humour and the like).
                                </p>
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label text-dark"
                                for="defaultCheck1"
                              >
                                <p>
                                  Various versions have evolved over the years,
                                  sometimes by accident, sometimes on purpose
                                  (injected humour and the like).
                                </p>
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label text-dark"
                                for="defaultCheck1"
                              >
                                <p>
                                  Various versions have evolved over the years,
                                  sometimes by accident, sometimes on purpose
                                  (injected humour and the like).
                                </p>
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                              />
                              <label
                                class="form-check-label text-dark"
                                for="defaultCheck1"
                              >
                                <p>
                                  Various versions have evolved over the years,
                                  sometimes by accident, sometimes on purpose
                                  (injected humour and the like).
                                </p>
                              </label>
                            </div>

                            <div
                              style={{ marginRight: "880px" }}
                              className="mb-5 mt-5"
                            >
                              <Button
                                title="previous"
                                classname="freelancer-dark-btn"
                                onclick={prevStep}
                              ></Button>
                              &nbsp;&nbsp;
                              <Button
                                title="Continue"
                                classname="freelancer-dark-btn"
                                onclick={nextStep}
                              ></Button>
                            </div>
                          </div>
                        </fieldset>
                      )}

                      {step === 4 && (
                        <fieldset>
                          <div className="form-card mr-5 ml-5">
                            <Mainheading
                              title="Post a project"
                              classname="freelancer-dark-btn"
                              color="#0800CF"
                              size="38px"
                            />

                            <Mainheading
                              title="Project Scope/Requirements"
                              classname="freelancer-dark-btn"
                              size="16px"
                            />

                            <textarea
                              className="form-control"
                              style={{ height: "130px" }}
                            >
                              Enter your text here
                            </textarea>
                            <br />
                            <div className="">
                              <label class="uploadFile">
                                <span class="filename">{uploadFile}</span>
                                <input
                                  type="file"
                                  class="inputfile-post-project form-control"
                                  onChange={get_value}
                                  name="file"
                                />
                              </label>
                            </div>

                            <input
                              type="button"
                              name="previous"
                              className="get-started-btn"
                              value="Previous"
                              onClick={prevStep}
                            />
                            <input
                              type="button"
                              name="next"
                              className="get-started-btn"
                              value="Submit"
                            />
                          </div>
                        </fieldset>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PostProject;
