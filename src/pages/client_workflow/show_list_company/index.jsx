import React, { useState } from 'react';
import { Card, Button, Dropdown, DropdownButton, Carousel, Form,Row,Col } from 'react-bootstrap';
import company_one from "../../../img/brand-one.png"
import company_two from "../../../img/brand-two.png"

const CompanyList = () => {
    const [sortType, setSortType] = useState('cost');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [minRating, setMinRating] = useState(0);
    const [minRevenue, setMinRevenue] = useState(0);
    const [companies, setCompanies] = useState([
      {
        id: 1,
        name: 'NodeTech Solutions',
        ratings: 4.5,
        location: 'San Francisco, USA',
        cost: 3000,
        revenue: 500000,
        portfolioImages: [company_one, company_two]
      },
      {
        id: 2,
        name: 'JS Experts',
        ratings: 4.8,
        location: 'London, UK',
        cost: 3500,
        revenue: 700000,
        portfolioImages: [company_one, company_two]
      },
      {
        id: 3,
        name: 'Backend Masters',
        ratings: 4.2,
        location: 'Bangalore, India',
        cost: 2800,
        revenue: 400000,
        portfolioImages: [company_one, company_two]
      }
    ]);
    
    const [customization, setCustomization] = useState("");
  
    const handleSort = (type) => {
      const sortedCompanies = [...companies].sort((a, b) => a[type] > b[type] ? 1 : -1);
      setSortType(type);
      setCompanies(sortedCompanies);
    };
  
    const handleOrder = (companyId) => {
      const selectedCompany = companies.find(company => company.id === companyId);
      console.log("Ordering from:", selectedCompany.name);
      console.log("Customizations:", customization);
    };
  
    const handleChat = (companyId) => {
      const selectedCompany = companies.find(company => company.id === companyId);
      alert(`Chatting with ${selectedCompany.name}`);
    };
  
    const filteredCompanies = companies.filter(company => 
      company.cost >= priceRange[0] && company.cost <= priceRange[1] &&
      company.ratings >= minRating &&
      company.revenue >= minRevenue
    );
  
    return (
      <div className="container mt-4">
        <div className='row'>
         <div className='col-md-3'>
            <h4>Filters</h4>
            <Form>
              <Form.Group controlId="formPriceRange">
                <Form.Label>Price Range (USD)</Form.Label>
                <Form.Control
                  type="range"
                  value={priceRange[1]}
                  min="0"
                  max="10000"
                  step="100"
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
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
  
            <DropdownButton id="dropdown-basic-button" title={`Sort by: ${sortType}`} className="mb-3 mt-4">
              <Dropdown.Item onClick={() => handleSort('cost')}>Price</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('revenue')}>Revenue</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('ratings')}>Ratings</Dropdown.Item>
            </DropdownButton>
            </div>
          <div className='col-md-9'>
            <h4>Specialized Node.js Companies</h4>
            <div className="row">
              {filteredCompanies.map((company) => (
                <div className="col-md-6" key={company.id}>
                  <Card className="mb-4">
                    <Carousel>
                      {company.portfolioImages.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img className="d-block w-100" src={image} alt="Portfolio slide" />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{company.name}</Card.Title>
                      <Card.Text>Ratings: {company.ratings}</Card.Text>
                      <Card.Text>Location: {company.location}</Card.Text>
                      <Card.Text>Cost: {company.cost} USD</Card.Text>
                      <Card.Text>Revenue: {company.revenue} USD</Card.Text>
                      <Form.Group>
                        <Form.Label>Customizations</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter custom requirements"
                          value={customization}
                          onChange={(e) => setCustomization(e.target.value)}
                        />
                      </Form.Group>
                      <Button 
                        variant="primary" 
                        onClick={() => handleOrder(company.id)} 
                        className="mt-2"
                      >
                        Place Order
                      </Button>
                      <Button 
                        variant="secondary" 
                        onClick={() => handleChat(company.id)} 
                        className="mt-2 ml-2"
                      >
                        Chat
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          </div>
      </div>
    );
  };
export default CompanyList;
