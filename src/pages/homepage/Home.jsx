import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Mainheading from "../../components/Mainheading";
import Brand_card from "../../components/Brand_carousal";
import Howshouldwork from "./howshouldwork";
import Whychoose from "./why-choose";
import Popularservices from "./popular-services";
import Joinvideosection from "./join-video-section";
import TestimonialSection from "./TestimonialSection";
import "./home.css";

function Home() {
  // Get the scrollYProgress using useScroll hook
  const { scrollYProgress } = useScroll();

  // Transform the Y value to move the element upward as you scroll
  const translateY = useTransform(scrollYProgress, [0, 1], [1,0]);

  // Transform opacity to fade out as the user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <Header />
      <Howshouldwork />
      <main id="main">
        <section id="about" className="about bg-white">
          {/* Use Framer Motion to animate this section */}
          <motion.div
            style={{
              y: translateY,
              transition: "all 0.5s ease-in-out",
            }}
          >
            {/* Popular services and why choose sections */}
            <Whychoose />
            <Popularservices />
          </motion.div>

          <Joinvideosection />

          {/* Other sections */}
          <div className="find-talent-way-container">
            <div className="row">
              <div className="col-12">
                <div>
                  <Mainheading title="Find talent your way" color="#fff" />
                  <p className="text-white find-talent-para">
                    Work with the largest network of independent professionals
                    and get things done—from quick turnarounds to big
                    transformations.
                  </p>
                  <div className="row">
                    <div className="col-md-4 col-12 my-3">
                      <div className="card-body-section">
                        <p className="card-title-talent">
                          Post a job and hire a professional
                        </p>
                        <p className="card-text-talent">Talent Marketplace™ </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 my-3">
                      <div className="card-body-section">
                        <p className="card-title-talent">
                          Browse and buy some projects
                        </p>
                        <p className="card-text-talent">Talent Marketplace™ </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 my-3">
                      <div className="card-body-section">
                        <p className="card-title-talent">
                          Post a job and hire a professional
                        </p>
                        <p className="card-text-talent">Talent Marketplace™ </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <motion.div
            style={{
              y: translateY,
              transition: "all 0.5s ease-in-out",
            }}
          >
            <TestimonialSection />
          </motion.div>

          {/* Brand section */}
          <motion.div
            className="container mt-5 py-5"
            style={{
              y: translateY,
              transition: "all 0.5s ease-in-out",
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <div>
                  <Brand_card />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
