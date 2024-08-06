import React, { useState } from 'react';

const Package_box = () => {
  const [checklistType, setChecklistType] = useState('BASIC');

  return (
    <div>
      <h2>Select Checklist Type</h2>
      <label>
        <input
          type="radio"
          name="checklist"
          value="BASIC"
          checked={checklistType === 'BASIC'}
          onChange={() => setChecklistType('BASIC')}
        />
        Basic
      </label>
      <label>
        <input
          type="radio"
          name="checklist"
          value="ADVANCE"
          checked={checklistType === 'ADVANCE'}
          onChange={() => setChecklistType('ADVANCE')}
        />
        Advance
      </label>
      <label>
        <input
          type="radio"
          name="checklist"
          value="PREMIUM"
          checked={checklistType === 'PREMIUM'}
          onChange={() => setChecklistType('PREMIUM')}
        />
        Premium
      </label>
    </div>
  );
};

export default Package_box;
