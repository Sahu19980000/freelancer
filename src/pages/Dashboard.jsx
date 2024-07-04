import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Dashboard() {
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
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2">
                      <i
                        className="ri-shopping-cart-2-line"
                        style={{ fontSize: "40px", color: "#0800CF" }}
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="card-title" style={{ fontSize: "13px" }}>
                        <br />
                        <b>MY ORDERS</b>
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
                        className="ri-slideshow-3-line text-center"
                        style={{ fontSize: "40px", color: "#0800CF" }}
                      />
                    </div>
                    <div className="col-md-10">
                      <p
                        className="card-title ml-5"
                        style={{ fontSize: "13px" }}
                      >
                        <br />
                        <b>MY PROJECT</b>
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
                        <br />
                        <b>EXPLORE PROJECTS</b>
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
                        <br />
                        <b>POST A PROJECT</b>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="about">
        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="card-deck mb-2">
                <div href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="#">
                          <img
                            src="https://alpinewebhost.com/server/assets/img/logo.png"
                            alt="Profile Image"
                            className="profile-img"
                            style={{ width: "150px" }}
                          />{" "}
                        </a>
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <h4>Alpine Technologies</h4>
                          <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
                          &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
                          <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
                          <br />
                          <div className="mt-1">
                            <a>
                              <i className="ri-map-pin-line mr-1"></i>Kanpur
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a>
                              <i class="ri-time-line mr-1"></i>Full time
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#C39E1C" }}>
                              <i class="ri-star-s-fill">4.85/5</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <a>1020 Review</a>
                          </div>
                          <p className="mt-2">
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>

                          <a className="mr-2 border border-dark"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "4px 5px",
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            <i className="ri-chat-voice-line text-dark"></i>
                          </a>

                          <a className="mr-2"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            profile
                          </a>

                          <a
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            Place Order
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="#">
                          <img
                            src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
                            alt="Profile Image"
                            className="profile-img"
                            style={{ width: "50px" }}
                          />{" "}
                        </a>
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <h4>Acme Corporation</h4>
                          <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
                          &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
                          <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
                          <br />
                          <div className="mt-1">
                            <a>
                              <i className="ri-map-pin-line mr-1"></i>Kanpur
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a>
                              <i class="ri-time-line mr-1"></i>Full time
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#C39E1C" }}>
                              <i class="ri-star-s-fill">4.85/5</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <a>1020 Review</a>
                          </div>
                          <p className="mt-2">
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>

                          <a className="mr-2 border border-dark"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "4px 5px",
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            <i className="ri-chat-voice-line text-dark"></i>
                          </a>

                          <a className="mr-2"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            profile
                          </a>

                          <a
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            Place Order
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="card-deck mb-2">
                <div href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="#">
                          <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"
                            alt="Profile Image"
                            className="profile-img"
                            style={{ width: "50px" }}
                          />{" "}
                        </a>
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <h4>Globex Corporation</h4>
                          <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
                          &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
                          <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
                          <br />
                          <div className="mt-1">
                            <a>
                              <i className="ri-map-pin-line mr-1"></i>Kanpur
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a>
                              <i class="ri-time-line mr-1"></i>Full time
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#C39E1C" }}>
                              <i class="ri-star-s-fill">4.85/5</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <a>1020 Review</a>
                          </div>
                          <p className="mt-2">
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>

                          <a className="mr-2 border border-dark"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "4px 5px",
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            <i className="ri-chat-voice-line text-dark"></i>
                          </a>

                          <a className="mr-2"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            profile
                          </a>

                          <a
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            Place Order
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="#">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kdTbCgyuqIsKv_PRBy9dBfERAeT8EoDpCsru7yscvii1FglVUyYd1l82eKIraw0_-A0&usqp=CAU"
                            alt="Profile Image"
                            className="profile-img"
                            style={{ width: "50px" }}
                          />{" "}
                        </a>
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <h4>Soylent Corp</h4>
                          <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
                          &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
                          <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
                          <br />
                          <div className="mt-1">
                            <a>
                              <i className="ri-map-pin-line mr-1"></i>Kanpur
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a>
                              <i class="ri-time-line mr-1"></i>Full time
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#C39E1C" }}>
                              <i class="ri-star-s-fill">4.85/5</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <a>1020 Review</a>
                          </div>
                          <p className="mt-2">
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>

                          <a className="mr-2 border border-dark"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "4px 5px",
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            <i className="ri-chat-voice-line text-dark"></i>
                          </a>

                          <a className="mr-2"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            profile
                          </a>

                          <a
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            Place Order
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="card-deck mb-2">
                <div href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="#">
                          <img
                            src="https://img.freepik.com/free-vector/golden-blue-diamond-shape-logo-business-template_23-2148707648.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user"
                            alt="Profile Image"
                            className="profile-img"
                            style={{ width: "50px" }}
                          />{" "}
                        </a>
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <h4>Vehement Capital Partners</h4>
                          <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
                          &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
                          <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
                          <br />
                          <div className="mt-1">
                            <a>
                              <i className="ri-map-pin-line mr-1"></i>Kanpur
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a>
                              <i class="ri-time-line mr-1"></i>Full time
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#C39E1C" }}>
                              <i class="ri-star-s-fill">4.85/5</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <a>1020 Review</a>
                          </div>
                          <p className="mt-2">
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>

                          <a className="mr-2 border border-dark"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "4px 5px",
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            <i className="ri-chat-voice-line text-dark"></i>
                          </a>

                          <a className="mr-2"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            profile
                          </a>

                          <a
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            Place Order
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div href="#" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="#">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShWffbW_NtCWZAzFLQl1cqloeNfJ3fHpxFPGU96fEwpwTw_ryd0MOM1RydJe7Nnx0V9Q&usqp=CAU"
                            alt="Profile Image"
                            className="profile-img"
                            style={{ width: "50px" }}
                          />{" "}
                        </a>
                      </div>
                      <div className="col-md-10">
                        <p
                          className="card-title ml-5"
                          style={{ fontSize: "13px" }}
                        >
                          <h4>One Solution pvt. ltd.</h4>
                          <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
                          &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
                          <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
                          <br />
                          <div className="mt-1">
                            <a>
                              <i className="ri-map-pin-line mr-1"></i>Kanpur
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a>
                              <i class="ri-time-line mr-1"></i>Full time
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#C39E1C" }}>
                              <i class="ri-star-s-fill">4.85/5</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <a>1020 Review</a>
                          </div>
                          <p className="mt-2">
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>

                          <a className="mr-2 border border-dark"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "4px 5px",
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            <i className="ri-chat-voice-line text-dark"></i>
                          </a>

                          <a className="mr-2"
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            profile
                          </a>

                          <a
                            href="about.html"
                            style={{
                              fontSize: "12px",
                              padding: "5px 18px",
                              color: "white",
                              backgroundColor: "blue",
                              textDecoration: "none",
                            }}
                          >
                            Place Order
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <br />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                <marquee
                  className="news-scroll"
                  behavior="scroll"
                  direction="left"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  <div className="card-deck">
                    <div className="card">
                      <i
                        className="ri-netflix-fill"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                    <div className="card">
                      <i
                        className="ri-paypal-line"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                    <div className="card">
                      <i
                        className="ri-dropbox-fill"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                    <div className="card">
                      <i
                        className="ri-netflix-fill"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                    <div className="card">
                      <i
                        className="ri-paypal-line"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                    <div className="card">
                      <i
                        className="ri-dropbox-fill"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;
