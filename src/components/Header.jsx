import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login");
    } 
    else {
      setToken(storedToken);
    }
  }, [navigate]);

  useEffect(
    
    () => {
      const token = localStorage.getItem("token");
      if (!token) {
      } 
      else {
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
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <Link to="/">Logo</Link>
            </h1>

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

                {token ? (
                  <li class="drop-down" style={{ marginTop: "-10px", marginLeft: "250px" }}>
                    <a href="#">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profile Image"
                        className="profile-img img-fluid"
                        style={{ width: "40px" }}
                      />{" "}
                      {/* {userName} */}
                    </a>
                    <ul>
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
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </nav>

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
              <p className="loader" style={{color: "red"}}>Loading...</p>
            ) : (
              <p style={{color: "#0800cf"}} className="text-bold">Hello, {userName}!</p>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
