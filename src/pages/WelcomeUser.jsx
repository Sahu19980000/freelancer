import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Buttton";
import Mainheading from "../components/Mainheading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image_right from "../../src/img/pexels-polina-zimmerman-3747100.png"

function WelcomUser() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("");
  //   } else {
  //     axios
  //       .get("http://localhost:8000/api/user", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((result) => {
  //         setUserName(result.data.name);
  //         console.log(result.data);
  //       })
        
  //       .catch((error) => {
  //         alert("User not LoggedIn");
  //         console.log(error);
  //       });
  //   }
  // }, [navigate]);

  return (
    <>
    <Header />
        <main id="main">
          <section id="welcome-section" className="welcome-section ">
            <div className="container shadow" data-aos="fade-up">
              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2 p-0"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <img
                    src={image_right}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center bg-white p-5 order-2 order-lg-1 content">
                <Mainheading
                    title="Welcome `${userName}`, Let’s start with your first job post"
                    color="#000000"
                    textalign="start"
                  />
                 

                  <Link to="/profile">
                  <Button
                      title="Get Started"
                      classname="freelancer-dark-btn px-5 p-0 shadow w-100 h6 font-weight-bold" 
                  />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
    <Footer />
    </>
  );
}

export default WelcomUser;
