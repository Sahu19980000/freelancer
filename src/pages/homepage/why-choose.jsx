import React from "react";
import startcircle from "../../img/mdi_star-circle.png";
import smartobject from "../../img/SmartObject 2.png";
import Mainheading from "../../components/Mainheading";

const Whychoose = () => {
  return (
    <div class="why-choose-container rounded-pill p-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="why-choose-left">
              <ul class="p-2">
                <li>
                  <Mainheading title="Why Choose Us" color="#000" />
                </li>
                <li className="py-2">
                  <img
                    src={startcircle}
                    width="15px"
                    height="15px "
                    class="my-1 mx-1"
                  />
                  <div>
                    <h4>
                      <strong>Proof of Quality</strong>
                    </h4>
                    <p>
                      Check any pro’s work samples, client reviews, and identity
                      verification
                    </p>
                  </div>
                </li>
                <li className="py-2">
                  <img
                    src={startcircle}
                    width="15px"
                    height="15px "
                    class="my-1 mx-1"
                  />
                  <div>
                    <h4>
                      <strong>Proof of Quality</strong>
                    </h4>
                    <p>
                      Check any pro’s work samples, client reviews, and identity
                      verification
                    </p>
                  </div>
                </li>
                <li className="py-2">
                  <img
                    src={startcircle}
                    width="15px"
                    height="15px "
                    class="my-1 mx-1"
                  />
                  <div>
                    <h4>
                      <strong>Proof of Quality</strong>
                    </h4>
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
