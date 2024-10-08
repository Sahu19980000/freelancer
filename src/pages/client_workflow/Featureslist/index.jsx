import React from 'react';

const FeaturesList = ({ features }) => {
  return (
    <ul className='feature-list'>
      {features.map((feature, idx) => (
        <li key={idx}>
          <img src='/images/arrow-icon.png' className='p-3' alt="arrow-icon" width={40} height={40}/>
          {feature.description}</li>
      ))}
    </ul>
  );
};

export default FeaturesList;
