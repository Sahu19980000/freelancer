import axios from 'axios';
import React, { useEffect, useState } from 'react';
import card_one from "../../img/3D Design.webp";
import Mainheading from '../../components/Mainheading';

const ProjectSelection = ({ id, Setid,setStep,step }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.get('https://ubm.annapurnadhamagro.com/api/explore/project', {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCategories(response.data);
        console.log('response categories',response);
      })
      .catch((error) => {
        console.error(error);

        if (error.response) {
          alert(`Message: ${error.response.data.message || error.response.statusText}`);
        } else if (error.request) {
          alert("Message: No response from server. Please try again later.");
        } else {
          alert(`Message: ${error.message}`);
        }
      });
    }
  }, []);

  const handleSelect = (index) => {
    Setid(index);
    // alert(index);
    setStep(step + 1);
    alert(step);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 my-4">
          <Mainheading title="Browse by category" color="#0800cf" />
        </div>
        <div className="card-container">
        {categories.map((category, index) => (
          <div className='card-section '>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            
          <div 
            key={index} 
            className="col-lg-12 col-md-12 col-sm-12 col-12 my-5 mx-1 text-black rounded p-3"
            onClick={() => handleSelect(category.id)} 
            style={{ cursor: 'pointer',margin:'10px' }}
          >
            <div className="card-content">
              <h2 className="card-title text-white h2">{category.name}</h2>
              
            </div>
          </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSelection;
