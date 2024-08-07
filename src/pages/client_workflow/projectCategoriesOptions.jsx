import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ProjectCategoriesOptions() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h1 className="mb-5">Sub Categories Selection</h1>

              <div className="card-deck mb-2">
                <Link to="/explorepage/subcategories" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>BUSINESS_WEB_APPLICATION</h6>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/explorepage/subcategories" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>BUSINESS_WEB_APPLICATION</h6>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/explorepage/subcategories" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>BUSINESS_WEB_APPLICATION</h6>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/explorepage/subcategories" className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>BUSINESS_WEB_APPLICATION</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectCategoriesOptions;
