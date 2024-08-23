import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login");
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  useEffect(
    () => {
      const token = localStorage.getItem("token");
      if (!token) {
      } else {
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

        const getUserName = async () => {
          try {
            const name = await getUserName();
            setUserName(name);
          } catch (error) {
            console.error("Failed to fetch user name:", error);
          }
        };
      }
    },
    [navigate],
    []
  );

  useEffect(() => {
    if (userName) {
      setLoading(false);
    }
  }, [userName]);

  return (
    <>
      <div>
        <header id="header" className="fixed-top ">
          <div className="container-fluid align-items-center px-5">
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
               
                  <div class="dropdown w-100">
                    <button
                      class="btn btn-secondary dropdown-toggle d-flex align-items-center"
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
                        style={{ color: "#ffffff" }}
                        className="text-bold mx-4"
                      >
                        Hello, {userName}{" "}
                      </p>
                    </button>
                    <ul
                      class="dropdown-menu pl-4"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <a
                          type="button"
                          onClick={() => {
                            localStorage.clear();
                            navigate("/");
                            window.location.reload();
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

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
      </div>
    </>
  );
}

export default Header;
