import React from "react";

function Wallpaper() {
  return (
    <div>
      <section
        id="hero2"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            <span style={{ color: "black" }}>
              Lorem Ipsum{" "}
              <span style={{ color: "#0800CF" }}>dolor sit amet</span>
            </span>
          </h1>
          <h2 style={{ color: "#0800CF" }}>
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </h2>
          <a href="about.html" className="learn-more-btn mt-3">
            Learn How to Hire
          </a>
        </div>
      </section>
    </div>
  );
}

export default Wallpaper;
