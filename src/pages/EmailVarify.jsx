import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Button from "../components/Buttton";
import Login_icon from "../img/login-bg.png";
import email_icon from "../img/email.png";
import Mainheading from "../components/Mainheading";

function EmailVarfy() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const hasRefreshed = localStorage.getItem("hasRefreshed");
    if (!token) {
      navigate("");
    } else {
      axios
        .get("https://ubm.annapurnadhamagro.com/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          setEmail(result.data.email);
          console.log("my-testing:", result.data);
          console.log("my-email:", email);

          if (result.data.is_email_verified === 1) {
            navigate("/welcome");
          } else if (result.data.is_email_verified === 0) {
            navigate("/EmailVarfy");
          }
        })

        .catch((error) => {
          alert("User not LoggedIn");
          console.log(error);
        });
    }
  }, [navigate]);

  const handleVerifyEmail = async () => {
    setLoading(true);
    setMessage(""); // Clear any previous message

    try {
      const token = localStorage.getItem("token"); // Assuming you store your token in localStorage
      const response = await axios.get(
        `https://ubm.annapurnadhamagro.com/api/send-verify-email/${email}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage(
        <Link to="/welcome">
          Email verified successfully. Click here to continue.
        </Link>
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "An error occurred while sending the verification email."
      );
    }
  };

  return (
    <>
      <Header />
      <section className="email_verify-container">
        <div className="container mb-5 shadow" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 bg-white d-flex align-items-center flex-column justify-content-center">
              <br />
              <center>
                <div className="col-lg-6 content">
                  <img
                    src={email_icon}
                    className="img-fluid"
                    alt="email_icon"
                    style={{ width: "150px" }}
                  />
                </div>
              </center>
              <br />
              <center>
                <Mainheading
                  title="Please verify your email"
                  color="#000000"
                  size="24px"
                  textalign="center"
                />
              </center>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
              <br />
              <input type="hidden" value={email} />
              <center>
                <div className="d-flex">
                  <Button
                    title="Send again"
                    classname="freelancer-light-btn px-2 p-0 shadow w-50 h6 font-weight-bold"
                    onclick={handleVerifyEmail}
                  />
                  <a
                    href="https://accounts.google.com/InteractiveLogin/signinchooser?ifkv=AaSxoQw4zKLGl-5I_GvZb6GlK5-Yw29j9rZbm0gemRPdMCA3euUUC4P0pCsg1amz1pqSuOwh_h6KDw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    target="_blank"
                  >
                    <Button
                      title="Gmail Inbox"
                      classname="freelancer-dark-btn mx-2 px-2 p-0 shadow w-100 h6 font-weight-bold"
                      onclick={handleVerifyEmail}
                    />
                  </a>
                </div>
              </center>
              {/* {message && <p>{message}</p>} */}

              <center>
                {/* {loading ? <span style={{color: "red"}}>Loading...</span> : <p style={{color: "#0800cf"}}>{message}</p>} */}
                <br />
                {loading && <p style={{ color: "red" }}>Loading...</p>}
                {message && <p style={{ color: "blue " }}>{message}</p>}
              </center>
            </div>

            <div className="col-lg-6 content p-0">
              <img src={Login_icon} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EmailVarfy;
