import React, { useState } from 'react';
import pricingData from './package.json';
import PlanCard from './plancard';

const Package_box = () => {
    const [activeTab, setActiveTab] = useState(0);
    // const [pricingData, setPricingData] = useState([]);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

  return (
    <div>
      <h2>Select Checklist Type</h2>
      {pricingData.tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab ${index === activeTab ? 'active' : ''} col-lg-4`}
                onClick={() => handleTabClick(index)}
              >
                {tab.categoryname}
              </button>
      ))}

      <div className="pricing-table text-center">
        {/* {pricingData[activeTab].getplans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))} */}
      </div>
    </div>
  );
};

export default Package_box;
