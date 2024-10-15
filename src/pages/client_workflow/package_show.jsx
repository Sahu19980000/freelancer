import React, { useEffect, useState } from 'react';
import pricingData from './package.json';
import PlanCard from './plancard';
import Button from '../../components/Buttton';
import { API_URL } from '../../config';
import axios from 'axios';
import Mainheading from '../../components/Mainheading';

const Package_box = ({id,Setplantype,planmakeid,setplan,plan_type,setStep,step}) => {
  
    const [activeTab, setActiveTab] = useState(0);
    // const [pricingData, setPricingData] = useState([]);
    const [showplan, Setshowplan] = useState([]);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        axios
          .get(
            `${API_URL}/api/explore/project/types/checklist/${id}`,
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
    
    const handleTabClick = (id,plan_name) => {
      console.log();
      Setplantype(plan_name);
      setplan(id);
      setStep(step+1);
      alert(plan_type);
    };

    useEffect(() => {
      if (plan_type) {
        console.log("Updated plan_type: ", plan_type);
        console.log("Updated plan_type id: ", planmakeid);
      }
    }, [plan_type,planmakeid]);

  return (
    <div className='container-fluid formstepone'>
      <div className="row">
        <div className="col-md-4 col-12 py-2">
          <Mainheading title="Choose the package" color="#404145" />
        </div>
        <div className="plan-container my-4">
        {showplan.map((plan, index) => (
          <div className="col-md-4 col-12 p-3 choose-plan-box" key={plan.id} >
            <Button 
              classname={`freelancer-tabs-btn btn-lg btn-block font-weight-bold text-capitalize border-0 my-2 w-100 p-2 rounded ${activeTab === index ? 'active' : ''}`} 
              title={plan.plan_name} 
            />
              <>
                <ul className='p-2'>
                  {plan.planitems.map((item) => (
                    <li key={item.id}>{item.items}</li>
                  ))}
                </ul>
                <Button 
                  classname="freelancer-tabs-btn border-0 p-2 rounded" 
                  title="Choose plan"
                  onclick={() => handleTabClick(++index,plan.plan_name)}
                />
              </>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Package_box;
