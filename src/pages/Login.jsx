import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login_icon from "../img/login-bg.png";
import Mainheading from "../components/Mainheading";
import Buttton from "../components/Buttton";
import ToggleSwitch from "../components/toggle/Togglecomponent";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setType(isVisible ? "password" : "text");
  };


  const handleSubmit = () => {
    axios
      .post("https://ubm.annapurnadhamagro.com/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.data.token);
        navigate("/");
      })
      .catch((error) => {
        alert("Service error");
        console.log(error);
      });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      navigate("/"); // Redirect to home if token exists
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="login-container " data-aos="fade-up">
        <div className="container bg-white my-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="login-box">
                <div className="card-body pt-3 d-flex justify-content-center flex-column">
                  <Mainheading
                    title="Welcome back"
                    color="#000000"
                    textalign="center"
                  />
                  <p className="text-center">Login into your account</p>

                  <div className="w-100 d-flex justify-content-center">
                    <span className="d-flex justify-content-center rounded align-items-center border border-2 w-50">
                      <a href="" className="px-2 py-2">
                        <img
                          src="https://ouch-cdn2.icons8.com/VGHyfDgzIiyEwg3RIll1nYupfj653vnEPRLr0AeoJ8g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODg2/LzRjNzU2YThjLTQx/MjgtNGZlZS04MDNl/LTAwMTM0YzEwOTMy/Ny5wbmc.png"
                          style={{ width: "40px" }}
                        />
                      </a>
                      Google
                    </span>
                  </div>
                  <br />

                  <div>
                    <div class="divider">
                      <span class="divider-text">Or continue with</span>
                    </div>
                  </div>

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

                  <div className="form-group input-password">
                    <input
                      type={type}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      autoComplete="current-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                      <span
                        className="px-3 py-2 bg-gray-100 cursor-pointer psd-icon "
                        onClick={handleToggle}
                      >
                        {isVisible ? <Eye size={24} /> : <EyeOff size={24} />}
                      </span>
                    

                    <div className="d-flex justify-content-between">
                      <ToggleSwitch />

                      <a href="#" className="float-right py-2">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <center>
                    <div className="row">
                      <div className="col-md-12">
                        <Buttton
                          title="Login"
                          classname="freelancer-dark-btn px-5 p-0 shadow w-100 h3 font-weight-bold" 
                          onclick={handleSubmit}
                        />
                      </div>
                    </div>
                    <p className="mt-4">
                      Don’t have an account?{" "}
                      <Link to="/signup">Sign up now</Link>
                    </p>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 pt-4 pt-lg-0 p-0">
              <img src={Login_icon} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
