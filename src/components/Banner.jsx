import React from "react";

function Banner() {
  return (
    <div>
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            <span style={{color: "black"}}>Find the Right <span style={{color: "#0800CF"}}>Verified Company</span>
            <br />
            Right Away for your Project</span>
          </h1>
          <h2 style={{color: "#0800CF"}}>
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Banner;
