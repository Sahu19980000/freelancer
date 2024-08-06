import React, { useState } from 'react';

const projectCategoriesOptions = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div>
      <button onClick={() => handleSelect('BUSINESS_WEB_APPLICATION')}>Business Web Application</button>
      <button onClick={() => handleSelect('ECOMMERCE')}>Ecommerce</button>
      <button onClick={() => handleSelect('CAB_BOOKING')}>Cab Booking</button>
      <button onClick={() => handleSelect('GROCERY')}>Grocery</button>
      <button onClick={() => handleSelect('LOCAL_SERVICES')}>Local Services</button>
      <button onClick={() => handleSelect('FOOD_DELIVERY')}>Food Delivery</button>
    </div>
  );
};

export default projectCategoriesOptions;
