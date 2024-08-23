import React from "react";
import { Carousel } from "react-bootstrap";
import testimonial_img from "../../img/testimonial-image.png"
import Mainheading from "../../components/Mainheading";
import testimonialicon from "../../img/bx_bxs-quote-left.png"

const TestimonialSection = () => {
  return (
    <div className="testimonial-container">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 testimonial-left">
            <Carousel>
              <Carousel.Item>
                <div className="d-flex align-items-center">
                  <img
                    className="d-block"
                    src={testimonial_img} // Replace with your image source
                    alt="First slide"
                    style={{ borderRadius: "10px",  }}
                  />
                  <div className="ml-4 testimonial-profile">
                    <img src={testimonialicon} className="profile-icon"/>
                    <h3>Jacob Molen</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex align-items-center">
                  <img
                    className="d-block"
                    src={testimonial_img} // Replace with your image source
                    alt="First slide"
                    style={{ borderRadius: "10px",  }}
                  />
                  <div className="ml-4 testimonial-profile">
                    <img src={testimonialicon} className="profile-icon"/>
                    <h3>Jacob Molen</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex align-items-center">
                  <img
                    className="d-block"
                    src={testimonial_img} // Replace with your image source
                    alt="First slide"
                    style={{ borderRadius: "10px",  }}
                  />
                  <div className="ml-4 testimonial-profile">
                    <img src={testimonialicon} className="profile-icon"/>
                    <h3>Jacob Molen</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </Carousel.Item>

            </Carousel>
          </div>
          <div className="col-md-6">
            <Mainheading title=" What we have done & 
            what our Customers say" color="#fff"  size="30px"/>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus enim, distinctio necessitatibus earum reiciendis explicabo perspiciatis aliquid, veniam itaque ad hic accusamus sequi adipisci, consequuntur maxime laborum reprehenderit nihil nobis?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
