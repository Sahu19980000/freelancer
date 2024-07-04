import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login_icon from "../img/Computer login-rafiki 1.png";
import Mainheading from "../components/Mainheading";
import Buttton from "../components/Buttton";

function Login() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert();
    // console.log({ email, password })
    // axios
    //   .post("http://localhost:8000/api/login", {
    //     email: email,
    //     password: password,
    //   })

    //   .then((result) => {
    //     console.log(result.data);
    //     localStorage.setItem("token", result.data.data.token);
    //     navigate("/");
    //   })

    //   .catch((error) => {
    //     alert("service error");
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      // navigate("/login");
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  return (
    <>
      <div>
        <Header />

        <div className="login-container" data-aos="fade-up">
          <div className="container py-5" >
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="card login-box">
                  <div className="card-body pt-3">
                    <Mainheading title="Sign in to your account" color="#0800CF" />
                    
                    <p>
                      Hey, Enter your details to get sign in to your account{" "}
                    </p>
                    <br />
                    {/* <form> */}
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                      />
                        <a href="#" className="float-right">
                      Forgot Password?
                    </a>
                    </div>
                  
                    <center>
                    <div className="row">
                        <div className="col-md-12">
                        <Buttton title="Login" classname="freelancer-dark-btn" onclick={handleSubmit}/>
                        <p>Or Sign in With</p>
                          <a href="">
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/023/986/613/original/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png"
                              style={{ width: "40px" }}
                            />
                          </a>
                          &nbsp;
                          <a href="">
                            <img
                              src="https://ouch-cdn2.icons8.com/VGHyfDgzIiyEwg3RIll1nYupfj653vnEPRLr0AeoJ8g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODg2/LzRjNzU2YThjLTQx/MjgtNGZlZS04MDNl/LTAwMTM0YzEwOTMy/Ny5wbmc.png"
                              style={{ width: "40px" }}
                            />
                          </a>
                          &nbsp;
                          <a href="">
                            <img
                              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                              style={{ width: "35px" }}
                            />
                          </a>
                          
                        </div>
                      </div>
                      <p className="mt-4">
                        Don’t have an account? <Link to="/signup">Sign up now</Link>
                      </p>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <img src={Login_icon} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Login;
