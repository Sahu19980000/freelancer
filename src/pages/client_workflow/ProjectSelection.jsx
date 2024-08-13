import axios from 'axios';
import React, { useEffect, useState } from 'react';
import card_one from "../../img/3D Design.webp"

const ProjectSelection = ({ id, Setid }) => {
  const [store_categories, Setcategories] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.get('https://ubm.annapurnadhamagro.com/api/explore/project', {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        Setcategories(result.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          alert(
            "Message: " + (err.response.data.message || err.response.statusText)
          );
        } else if (err.request) {
          alert("Message: No response from server. Please try again later.");
        } else {
          alert("Message: " + err.message);
        }
      });
    }
  }, []);

  const handleSelect = (index) => {
    Setid(index);
  };

  return (
    <div className='container-fluid'>
      <div className="row">
        {store_categories.map((ele, index) => (
        <div key={index} className="col-md-3 col-12 card-container mx-2 my-4 bg-success text-white rounded p-3">
          <div className="card-content">
            <h5 className="card-title ">{ele.name}</h5>
            <div className="card-image-container">
              <img
                src={card_one} // Assuming ele.image_url contains the image URL
                alt={ele.name}
                className="card-image img-fluid"
              />
            </div>
          </div>
          <button
            id={index}
            className="bg-primary border-0 text-white m-4 p-2 rounded"
            onClick={() => handleSelect(index)}
          >
            Select Categories
          </button>
        </div>
      ))}
        </div>
    </div>
  );
};

export default ProjectSelection;
