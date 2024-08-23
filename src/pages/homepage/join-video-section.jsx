import React from "react";
import videbg from "../../img/pexels-polina-zimmerman-3747454.png"
import videoplay from "../../img/video-play.png"

const Joinvideosection = () => {
  return (
    <div>
      <div class="join-fingertips-container" >
        <div class="row">
          <div class="col-12">
            <h1 class="text-white text-center">
              Freelance services at your fingertips!{" "}
            </h1>
            <div class="d-flex justify-content-center my-3">
              <button class="bg-white px-5 py-3 rounded-pill border-0">Join</button>
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
