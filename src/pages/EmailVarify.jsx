import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Button from "../components/Buttton";

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
        .get("http://localhost:8000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          setEmail(result.data.email);
          console.log("my-testing:", result.data);

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
        `http://localhost:8000/api/send-verify-email/${email}`,
        {
          headers: {
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
      <div>
        {/* <Header /> */}
        <div className="container mb-5" data-aos="fade-up">
          <div className="section-title">
            <p></p>
          </div>

          <div className="row">
            <div className="col-lg-6  order-lg-2">
              <div className="card">
                <div className="card-body">
                  <br />
                  <br />
                  <br />
                  <br />
                  <center>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                      <img
                        src="assets/img/mail.png"
                        className="img-fluid"
                        alt=""
                        style={{ width: "70px" }}
                      />
                    </div>
                  </center>
                  <br />
                  <center>
                    <h2 style={{ color: "#0800CF" }}>
                      Please verify your email
                    </h2>
                  </center>
                 
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                  <br />
                  <input type="hidden" value={email} />
                  <center>
                    <Button className="freelancer-dark-btn"  onclick={handleVerifyEmail}> 
                    Send again
                    </Button>
                 
                    <a
                      href="https://accounts.google.com/InteractiveLogin/signinchooser?ifkv=AaSxoQw4zKLGl-5I_GvZb6GlK5-Yw29j9rZbm0gemRPdMCA3euUUC4P0pCsg1amz1pqSuOwh_h6KDw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                      onClick={handleVerifyEmail}
                      className="get-started-btn"
                      target="_blank"
                    >
                      Go to Gmail inbox
                    </a>
                  </center>
                  {/* {message && <p>{message}</p>} */}

                  <center>
                    {/* {loading ? <span style={{color: "red"}}>Loading...</span> : <p style={{color: "#0800cf"}}>{message}</p>} */}
                    <br />
                    {loading && <p style={{ color: "red" }}>Loading...</p>}
                    {message && <p style={{ color: "blue " }}>{message}</p>}
                  </center>

                 
                </div>
              </div>
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <img src="assets/img/log.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default EmailVarfy;
