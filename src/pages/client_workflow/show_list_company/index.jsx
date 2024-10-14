import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Dropdown,
  DropdownButton,
  Carousel,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import company_one from "../../../img/brand-one.png";
import company_two from "../../../img/brand-two.png";
import axios from "axios";
import { API_URL } from "../../../config";

const CompanyList = () => {
  const [sortType, setSortType] = useState("cost");
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [minRating, setMinRating] = useState(0);
  const [minRevenue, setMinRevenue] = useState(0);
  const [companies, setCompanies] = useState([
    // {
    //   id: 1,
    //   companyname: 'NodeTech Solutions',
    //   frontend:'React',
    //   backend : 'Node',
    //   database : "MYSQl",
    //   ratings: 4.5,
    //   location: 'San Francisco, USA',
    //   cost: 3000,
    //   revenue: 500000,
    //   portfolioImages: [company_one, company_two]
    // },
    // {
    //   id: 2,
    //   name: 'JS Experts',
    //   ratings: 4.8,
    //   location: 'London, UK',
    //   cost: 3500,
    //   revenue: 700000,
    //   portfolioImages: [company_one, company_two]
    // },
    // {
    //   id: 3,
    //   name: 'Backend Masters',
    //   ratings: 4.2,
    //   location: 'Bangalore, India',
    //   cost: 2800,
    //   revenue: 400000,
    //   portfolioImages: [company_one, company_two]
    // }
  ]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      axios
        .get(
          `${API_URL}/api/explore/project/technology/filter?min=0&max=${priceRange[1]}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((result) => {
          // alert(id);
          // alert("show categories");
          setCompanies(result.data);

          companies.map((e) => {
            return (
              <div>
                <h2>{e.backend}</h2>
              </div>
            );
          });

          console.log("Fetched data:", result.data);
          console.log("show companies ", companies);
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            alert(
              "Message: " + (err.response.message || err.response.statusText)
            );
          } else if (err.request) {
            alert("Message: No response from server. Please try again later.");
          } else {
            alert("Message: " + err.message);
          }
        });
    }
  }, [priceRange]);

  const [customization, setCustomization] = useState("");

  const handleSort = (type) => {
    const sortedCompanies = [...companies].sort((a, b) =>
      a[type] > b[type] ? 1 : -1
    );
    setSortType(type);
    setCompanies(sortedCompanies);
  };

  const handleOrder = (companyId) => {
    const selectedCompany = companies.find(
      (company) => company.id === companyId
    );
    console.log("Ordering from:", selectedCompany.name);
    console.log("Customizations:", customization);
  };

  const handleChat = (companyId) => {
    const selectedCompany = companies.find(
      (company) => company.id === companyId
    );
    alert(`Chatting with ${selectedCompany.name}`);
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company.cost >= priceRange[0] &&
      company.cost <= priceRange[1] &&
      company.ratings >= minRating &&
      company.revenue >= minRevenue
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <h4>Filters</h4>
          <Form>
            <Form.Group controlId="formPriceRange">
              <Form.Label>Price Range (USD)</Form.Label>
              <Form.Control
                type="range"
                value={priceRange[1]}
                min="0"
                max="300000"
                step="100"
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
              />
              <Form.Text>Up to {priceRange[1]} USD</Form.Text>
            </Form.Group>

            <Form.Group controlId="formMinRating">
              <Form.Label>Minimum Rating</Form.Label>
              <Form.Control
                type="range"
                value={minRating}
                min="0"
                max="5"
                step="0.1"
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
              />
              <Form.Text>{minRating} Stars</Form.Text>
            </Form.Group>

            <Form.Group controlId="formMinRevenue">
              <Form.Label>Minimum Revenue (USD)</Form.Label>
              <Form.Control
                type="number"
                value={minRevenue}
                onChange={(e) => setMinRevenue(parseInt(e.target.value))}
              />
              <Form.Text>At least {minRevenue} USD</Form.Text>
            </Form.Group>
          </Form>

          <DropdownButton
            id="dropdown-basic-button"
            title={`Sort by: ${sortType}`}
            className="mb-3 mt-4"
          >
            <Dropdown.Item onClick={() => handleSort("cost")}>
              Price
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("revenue")}>
              Revenue
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("ratings")}>
              Ratings
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col-md-9">
          <h4>Specialized Node.js Companies</h4>
          <div className="row">
            {companies.length === 0 ? (
              <p>No companies available.</p>
            ) : (
              companies.map((ele, index) => {
                console.log("Company element:", ele);
                return (
                  <div
                    key={index}
                    className="col-md-3 col-12 card-container mx-2 my-4 bg-success  text-start text-white rounded p-3"
                  >
                    <h6 className="text-white">{ele.companyname}</h6>
                    <h6>frontend : {ele.frontend}</h6>
                    <h6>backend : {ele.backend}</h6>
                    <h6>delivery time : {ele.delivery_time}</h6>
                    <h6>Average cost : {ele.avg_cost}</h6>
                    <h6>other info : {ele.info}</h6>
                  </div>
                );
              }) 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyList;
