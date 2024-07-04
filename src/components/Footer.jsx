import React from "react";
import Wallpaper from "./Footerimg";
import FooterImg from "./Footerimg";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <p></p>
                </div>

                <div className="row mb-5">
                  <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <FooterImg />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3 className="text-white">LOGO</h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li key="home">
                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li key="about">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/about">About us</a>
                  </li>
                  <li key="services">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/services">Services</a>
                  </li>
                  <li key="terms">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/terms">Terms of service</a>
                  </li>
                  <li key="privacy">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/privacy">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li key="web-design">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/web-design">Web Design</a>
                  </li>
                  <li key="web-development">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/web-development">Web Development</a>
                  </li>
                  <li key="product-management">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/product-management">Product Management</a>
                  </li>
                  <li key="marketing">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/marketing">Marketing</a>
                  </li>
                  <li key="graphic-design">
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/graphic-design">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p className="text-white">
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright text-white">
              &copy; Copyright{" "}
              <strong>
                <span>Logo</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits text-white">
              Designed by <a href="#">Alpine Technology</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://twitter.com" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://facebook.com" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://instagram.com" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://skype.com" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="https://linkedin.com" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
