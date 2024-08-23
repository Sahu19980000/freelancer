import React from "react";
import videbg from "../../img/pexels-polina-zimmerman-3747454.png"
import videoplay from "../../img/video-play.png"
import Mainheading from "../../components/Mainheading";

const Joinvideosection = () => {
  return (
    <div>
      <div class="join-fingertips-container" >
        <div class="row">
          <div class="col-12">
            <Mainheading title="Freelance services at your fingertips!" color="#fff" textalign="center" />
            <div class="d-flex justify-content-center my-3">
              <button class="bg-white px-5 py-3 rounded-pill border-0 h3"><strong>Join</strong></button>
            </div>
          </div>
        </div>
      </div>

      <div class="video-play-section-container">
        <div class="row mb-5">
          <div class="col-12">
            <div class="video-section">
              <img
                src={videbg}
                alt="Video Thumbnail"
                class="img-fluid"
              />
              <div class="play-button">
                <img src={videoplay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinvideosection;
