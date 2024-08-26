import React from "react";
import Mainheading from "../../components/Mainheading";
import ImageBanner from "../../img/pexels-fauxels-3184611.png";
import Button from "../../components/Buttton";
import bannershaoe from "../../img/banner-shape.png";

const HowShouldWork = () => {
  return (
    <div className="how-should-container bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <Mainheading
              title="How Work Should Work"
              size="78px"
              color="#000"
            />
            <p className="h5 py-4 para-graph">
              Work with the largest network of independent professionals and get
              things done efficiently.
            </p>
            <Button
              title="Get started"
              classname="freelancer-dark-btn rounded-pill"
            />
            <div className="row py-5">
              <div className="col-md-4 col-4">
                <p className="shouldwork-content">
                  <strong className="counter">98k +</strong>
                  <br />
                  Artwork
                </p>
              </div>

              <div className="col-md-4 col-4">
                <p className="shouldwork-content">
                  <strong className="counter">13k + </strong>
                  <br />
                  Auction
                </p>
              </div>

              <div className="col-md-4 col-4">
                <p className="shouldwork-content">
                  <strong className="counter">16k +</strong>
                  <br />
                  Artist
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 text-center" data-aos="fade-up">
            <img
              src={ImageBanner}
              alt="How Work Should Work"
              className="img-fluid image-herosection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowShouldWork;
