import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";
import crossicon from "../img/cross.png";
import Button from "./Buttton";

function Header() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState(null);
  const [mobilemenu, Setmobilemenu] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login");
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://ubm.annapurnadhamagro.com/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          setUserName(result.data.name);
        })
        .catch((error) => {
          alert("User name or password is wrong");
          console.log(error);
        });
    }
  }, [token]);

  useEffect(() => {
    if (userName) {
      setLoading(false);
    }
  }, [userName]);

  const toggleMobileMenu = () => {
    if (mobilemenu == true) {
      Setmobilemenu(false);
    } else {
      Setmobilemenu(true);
    }

    // alert(mobilemenu);
  };

  const show_data = () => {
    alert("dd");
  };

  return (
        <header id="header" className="fixed-top ">
          <div className="container-fluid align-items-center px-5 d-none d-lg-block">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo mr-auto">
                  <Link to="/">Logo</Link>
                </h1>
              </div>

              <div className="col-md-3">
                <nav className="nav-menu d-none d-lg-block float-right">
                  <ul>
                    <li>
                      <Link to="/explorepage">Explore Project</Link>
                    </li>
                    <li>
                      <Link to="/postproject">Post a Project</Link>
                    </li>
                    <li>
                      <Link to="/whybrand">Why BRAND</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-md-3">
                <div className="search-box">
                  <Search className="my-custom-class" />
                  <input
                    type="search"
                    name=""
                    className="search-input"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="col-md-3">
                {!token ? (
                  <div className="d-flex">
                  <Link to="/login" >
                    <Button
                          title="Login"
                          classname="freelancer-dark-btn mx-2 my-0 px-4 w-auto h6 font-weight-bold" 
                    />
                   </Link>

                   <Link to="/signup" >
                    <Button
                          title="signup"
                          classname="freelancer-light-btn mx-2 my-0 px-4 w-auto h6 font-weight-bold" 
                    />
                   </Link>
                  </div>
                ) : loading ? (
                  <p className="loader" style={{ color: "red" }}>
                    Loading...
                  </p>
                ) : (
                  <div className="dropdown w-100">
                    <button
                      className="btn dropdown-toggle d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton"
                      aria-expanded="false"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profile Image"
                        className="profile-img img-fluid"
                        style={{ width: "40px" }}
                      />
                      <p
                        style={{ color: "#000" }}
                        className="text-bold mx-4"
                      >
                        Hello, {userName}{" "}
                      </p>
                    </button>
                    <ul
                      className="dropdown-menu pl-4"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/profile"  onClick={() => {
                            localStorage.clear();
                            navigate("/");
                            window.location.reload();
                          }}>Logout</Link>
                      </li>
                      
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* -------mobile nav menu------- */}

          <nav className="navbar navbar-expand-lg navbar-light bg-white d-block d-lg-none">
            <div className="container-fluid px-0">
              <div className="col-6">
                <h1 className="logo mr-auto">
                  <Link to="/">Logo</Link>
                </h1>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleMobileMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              {mobilemenu && (
                <div className="col-12 bg-white mobile-menu">
                  <div className="cross-icon">
                    <img
                      src={crossicon}
                      width="30px"
                      height="30px"
                      onClick={toggleMobileMenu}
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 my-3">
                      {!token ? (
                        <>
                          <Link to="/login" className="get-started-btn">
                            Login
                          </Link>

                          <Link to="/signup" className="get-started-btn">
                            SignUp
                          </Link>
                        </>
                      ) : loading ? (
                        <p className="loader" style={{ color: "red" }}>
                          Loading...
                        </p>
                      ) : (
                        <div className="dropdown w-100">
                          <button
                            className="btn btn-profile dropdown-toggle d-flex align-items-center"
                            type="button"
                            id="dropdownMenuButton"
                            aria-expanded="false"
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              alt="Profile Image"
                              className="profile-img img-fluid"
                              style={{ width: "40px" }}
                            />
                            <p
                        style={{ color: "#000" }}
                        className="text-bold mx-4"
                      >
                        Hello, {userName}{" "}
                      </p>
                          </button>
                          <ul
                            className="dropdown-menu pl-4"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => {
                                  localStorage.clear();
                                  navigate("/");
                                  window.location.reload();
                                }}
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <nav className="nav-menu float-left ">
                        <ul className="d-flex flex-column gap-4">
                          <li>
                            <Link to="/explorepage">Explore Project</Link>
                          </li>
                          <li>
                            <Link to="/postproject">Post a Project</Link>
                          </li>
                          <li>
                            <Link to="/whybrand">Why BRAND</Link>
                          </li>
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className="col-12 my-3">
                      <div className="search-box">
                        <Search className="my-custom-class" />
                        <input
                          type="search"
                          name=""
                          className="search-input"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* show categories*/}
          <div className="container-fluid mt-3 p-0">
            <div className="row">
              <div className="col-12">
                <div className="all-categories-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <ul
                          className="d-flex justify-content-between align-items-center"
                          style={{ listStyleType: "none" }}
                        >
                          <li className="categories-list">All Categories</li>
                          <li className="categories-list">Art</li>
                          <li className="categories-list">Graphic Designing</li>
                          <li className="categories-list">AI Services</li>
                          <li className="categories-list">Video & Animation</li>
                          <li className="categories-list">Graphic Designing</li>
                          <li className="categories-list">AI Services</li>
                          <li className="categories-list">Video & Animation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  );
}

export default Header;
