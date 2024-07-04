import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

function WelcomUser() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("");
    } else {
      axios
        .get("http://localhost:8000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          setUserName(result.data.name);
          console.log(result.data);
        })
        
        .catch((error) => {
          alert("User not LoggedIn");
          console.log(error);
        });
    }
  }, [navigate]);

  return (
    <>
      <div>
        <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <p></p>
              </div>

              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img
                    src="assets/img/welcom.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h1 className="mb-5">
                    <span style={{ color: "#0800CF" }}>
                      Welcome {userName}, Let’s start with your first job post
                    </span>
                  </h1>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>

                  <Link to="/profile" className="learn-more-btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default WelcomUser;
