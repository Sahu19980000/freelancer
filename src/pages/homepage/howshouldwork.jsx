import React from "react";
import Mainheading from "../../components/Mainheading";
import ImageBanner from "../../img/pexels-fauxels-3184611.png";
import Button from "../../components/Buttton";

const HowShouldWork = () => {
  return (
    <div className="how-should-container bg-white">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-6 col-12">
            <Mainheading title="How Work Should Work" />
            <p>
              Work with the largest network of independent professionals and get
              things done efficiently.
            </p>
            <Button title="Get started" classname="freelancer-dark-btn rounded-pill" />
            <div className="row py-5">

              <div className="col-md-4">
                <p className="h2 text-black">
                  <b>98k +</b>
                  <br />
                  Artwork
                </p>
              </div>

              <div className="col-md-4">
                <p className="h2 text-black">
                  <b>13k + </b>
                  <br />
                  Auction
                </p>
              </div>

              <div className="col-md-4">
                <p className="h2 text-black">
                  <b>16k +</b>
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
