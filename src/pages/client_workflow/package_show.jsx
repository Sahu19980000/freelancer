import React, { useEffect, useState } from 'react';
import pricingData from './package.json';
import PlanCard from './plancard';
import Button from '../../components/Buttton';
import { API_URL } from '../../config';
import axios from 'axios';

const Package_box = ({id}) => {
    const [activeTab, setActiveTab] = useState(0);
    // const [pricingData, setPricingData] = useState([]);
    const [showplan, Setshowplan] = useState([]);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      alert(id);
      if (storedToken) {
        axios
          .get(
            `https://ubm.annapurnadhamagro.com/api/explore/project/types/checklist/${id}`,
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((result) => {
            alert(id);
            // alert("show categories");
            Setshowplan(result.data);
            
            console.log('sub categories ',result);
            
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
    }, []);
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 p-5">
          <h2>Package Select</h2>
        </div>
        {showplan.map((plan, index) => (
          <div className="col-md-4 p-3" key={plan.id}>
            <Button 
              classname={`bg-primary border-0 text-white p-2 rounded ${activeTab === index ? 'active' : ''}`} 
              title={plan.plan_name} 
              onClick={() => handleTabClick(index)}
            />
            {activeTab === index && (
              <>
                <ul>
                  {plan.planitems.map((item) => (
                    <li key={item.id}>{item.items}</li>
                  ))}
                </ul>
                <Button 
                  classname="bg-primary border-0 text-white p-2 rounded" 
                  title="Choose plan"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package_box;
