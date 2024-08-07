import React, { useState } from 'react';

const ProjectSelection = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (type) => {
    setSelected(type);
    // onSelect(type);
  };

  return (
    <div>
      <button className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect('WEB_DEVELOPMENT')}>Web Development</button>
      <button className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect('MOBILE_APP_DEVELOPMENT')}>Mobile App Development</button>
      <button className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect('HRMS')}>HRMS</button>
      <button className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect('ERP')}>ERP</button>
      <button className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect('FINANCE_ACCOUNTING')}>Finance & Accounting</button>
      <button className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect('AI')}>AI</button>
    </div>
  );
};

export default ProjectSelection;
