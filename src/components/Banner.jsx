import React from "react";
import Banner_image from "../../src/img/bg-banner-01.png"
import Buttton from "./Buttton";
import Mainheading from "./Mainheading";

function Banner() {
  return (
    <div>
      <section class="banner-section bg-white h-auto">
    <div class="container">
        <div class="row align-items-center">
            {/* <!-- Left Column with Text --> */}
            <div class="col-lg-6">
                <div class="animate__animated  animate__fadeInLeftBig">
                  <Mainheading title="Read! In the Name of your Lord" />
                  
                </div>
                <p class="animate__animated  animate__fadeInRight">We are the best Educational Organization.Let’s know about Islam  And the holy Quran!</p>
                <Buttton title="Sign Up For Free" classname="freelancer-light-btn"/>
            </div>
            
            {/* <!-- Right Column with Image --> */}
            <div class="col-lg-6 text-center ">
                <img src={Banner_image} alt="Image Alt Text" class="img-fluid animate__animated animate__fadeInBottomRight" />
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default Banner;
