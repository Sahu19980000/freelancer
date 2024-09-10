import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import the CSS file

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='d-flex w-auto my-3'>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
     <p className='px-4'>Remember me</p>
    </div>
  );
}

export default ToggleSwitch;
