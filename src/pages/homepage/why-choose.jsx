import React from "react";
import startcircle from "../../img/mdi_star-circle.png";
import smartobject from "../../img/SmartObject 2.png";

const Whychoose = () => {
  return (
    <div class="why-choose-container rounded-pill p-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="why-choose-left">
              <ul class="py-4">
                <li>
                  <b>
                    <h1 class="font-bold">Why Choose Us </h1>
                  </b>
                </li>
                <li className="py-4">
                  <img
                    src={startcircle}
                    width="15px"
                    height="15px "
                    class="my-1 mx-1"
                  />
                  <div>
                    <h4>Proof of Quality</h4>
                    <p>
                      Check any pro’s work samples, client reviews, and identity
                      verification
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src={startcircle}
                    width="15px"
                    height="15px"
                    class="my-1 mx-1"
                  />
                  <div>
                    <h4>Proof of Quality</h4>
                    <p>
                      Check any pro’s work samples, client reviews, and identity
                      verification
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src={startcircle}
                    width="15px"
                    height="15px"
                    class="my-1 mx-1"
                  />
                  <div>
                    <h4>Proof of Quality</h4>
                    <p>
                      Check any pro’s work samples, client reviews, and identity
                      verification
                    </p>
                  </div>
                </li>
              </ul>
              <img src={smartobject} class="choose-img img-fluid" />
            </div>
          </div>

          <div class="col-md-4">
            <div class="why-choose-right">
              <h3>We’re the world’s work marketplace</h3>
              <div>
                <p>* 4.9/5 </p>
              </div>
              <div class="d-flex">
                <p>* </p>
                <div>
                  <h4>Award winner</h4>
                  <p>G2’s 2021 Best Sofrware Awards </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
