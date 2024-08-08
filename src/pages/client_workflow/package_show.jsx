import React, { useState } from 'react';
import pricingData from './package.json';
import PlanCard from './plancard';
import Button from '../../components/Buttton';

const Package_box = () => {
    const [activeTab, setActiveTab] = useState(0);
    // const [pricingData, setPricingData] = useState([]);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

  return (
    <div className='container'>
     <div className="row">
     <div className="col-12 p-5">
     <h2>Package Select</h2>
     </div>
      <div className="col-md-4 p-3">
        <Button classname="bg-primary border-0 text-white p-2 rounded" title="Basic"/>
        <ul>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
        </ul>
        <Button classname="bg-primary border-0 text-white p-2 rounded" title="Choose plan"/>
      </div>
      <div className="col-md-4 p-3">
        <Button classname="bg-primary border-0 text-white p-2 rounded" title="preminum"/>
        <ul>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
        </ul>
        <Button classname="bg-primary border-0 text-white p-2 rounded " title="Choose plan"/>
      </div>
      <div className="col-md-4 p-3">
        <Button classname="bg-primary border-0 text-white p-2 rounded" title="gold"/>
        <ul className='p-4'>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
          <li>this is heading</li>
        </ul>
        <Button classname="bg-primary border-0 text-white p-2 rounded" title="Choose plan"/>
      </div>

     </div>
     
      
    </div>
  );
};

export default Package_box;
