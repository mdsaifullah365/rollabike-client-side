import React from 'react';

const AboutInfoCard = ({ info }) => {
  const { icon, title, description } = info;
  return (
    <div className='card bg-base-200 text-secondary rounded-md'>
      <div className='card-body items-center text-center'>
        <div className='text-primary text-8xl'>{icon}</div>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutInfoCard;
