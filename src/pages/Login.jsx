import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Mainheading from "../components/Mainheading";
import Buttton from "../components/Buttton";
import ToggleSwitch from "../components/toggle/Togglecomponent";
import { Eye, EyeOff } from "lucide-react";
import Swal from 'sweetalert2'

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

  const Swal = require('sweetalert2')

  const handleSubmit = () => {
    axios
      .post("https://ubm.annapurnadhamagro.com/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        
        localStorage.setItem("token", result.data.data.token);
        Swal.fire({
          title: 'Success!',
          text: 'Successful login please continue ',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'plese check your details',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
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
      <div className="login-container " data-aos="fade-up">
        <div className="container shadow bg-white">
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="login-box">
                <div className="card-body pt-3 d-flex justify-content-center flex-column">
                  <Mainheading
                    title="Welcome back"
                    color="#000000"
                    textalign="center"
                    size="32px"
                  />
                  <p className="text-center">Login into your account</p>

                  <div className="w-100 d-flex justify-content-center">
                    <span className="d-flex justify-content-center rounded align-items-center border border-2 w-50">
                      <a href="" className="px-2 py-2">
                        <img
                          src="https://ouch-cdn2.icons8.com/VGHyfDgzIiyEwg3RIll1nYupfj653vnEPRLr0AeoJ8g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODg2/LzRjNzU2YThjLTQx/MjgtNGZlZS04MDNl/LTAwMTM0YzEwOTMy/Ny5wbmc.png"
                          style={{ width: "40px" }}
                          className="img-fluid"
                        />
                      </a>
                      Google
                    </span>
                  </div>
                  <div>
                    <div class="divider">
                      <span class="divider-text">Or continue with</span>
                    </div>
                  </div>

                  {/* <form> */}
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-sm"
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
                      className="form-control form-control-sm"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      autoComplete="current-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                      <span
                        className="px-3 py-0 bg-gray-100 cursor-pointer psd-icon "
                        onClick={handleToggle}
                      >
                        {isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                      </span>
                    

                    <div className="d-flex justify-content-between">
                      <ToggleSwitch />

                      <a href="#" className="float-right py-3">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <center>
                    
                    <div className="row">
                      <div className="col-md-12">
                        <Buttton
                          title="Login"
                          classname="freelancer-dark-btn px-5 p-0 shadow w-100 h5 font-weight-bold" 
                          onclick={handleSubmit}
                        />
                      </div>
                    </div>

                    <p className="mt-1">
                      Don’t have an account?{" "}
                      <Link to="/signup">Sign up now</Link>
                    </p>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-0 left-login-box d-md-block d-none">
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
