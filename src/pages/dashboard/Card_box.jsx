import React from "react";

const Card_box = (props) => {
  return (
    <div href="#" className="card">
      <div className="card-body">
        <div className="row">                                                                                                                                                                                  
          <div className="col-md-2">
            <a href="#">
              <img
                src="https://alpinewebhost.com/server/assets/img/logo.png"
                alt="Profile Image"
                className="profile-img"
                style={{ width: "150px" }}
              />{" "}
            </a>
          </div>
          <div className="col-md-10">
            <p className="card-title ml-5" style={{ fontSize: "13px" }}>
              <h4>{props.title}</h4>
              <a>web design</a>&nbsp;&nbsp;&nbsp;<a>web design</a>
              &nbsp;&nbsp;&nbsp;<a>Marketing</a>&nbsp;&nbsp;&nbsp;
              <a>SEO</a>&nbsp;&nbsp;&nbsp;<a>AI Platform</a>
              <br />
              <div className="mt-1">
                <a>
                  <i className="ri-map-pin-line mr-1"></i>Kanpur
                </a>
                &nbsp;&nbsp;&nbsp;
                <a>
                  <i class="ri-time-line mr-1"></i>Full time
                </a>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#C39E1C" }}>
                  <i class="ri-star-s-fill">4.85/5</i>
                </span>
                &nbsp;&nbsp;&nbsp;
                <a>1020 Review</a>
              </div>
              <p className="mt-2">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
              <a
                className="mr-2 border border-dark"
                href="about.html"
                style={{
                  fontSize: "12px",
                  padding: "4px 5px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i className="ri-chat-voice-line text-dark"></i>
              </a>
              <a
                className="mr-2"
                href="about.html"
                style={{
                  fontSize: "12px",
                  padding: "5px 18px",
                  color: "white",
                  backgroundColor: "blue",
                  textDecoration: "none",
                }}
              >
                profile
              </a>
              <a
                href="about.html"
                style={{
                  fontSize: "12px",
                  padding: "5px 18px",
                  color: "white",
                  backgroundColor: "blue",
                  textDecoration: "none",
                }}
              >
                Place Order
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_box;
