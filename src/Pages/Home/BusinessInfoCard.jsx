/* eslint-disable react/prop-types */

const BusinessInfoCard = ({ info }) => {
  const { icon, title, quantity } = info;
  return (
    <div className='card text-base-100 bg-secondary rounded-md'>
      <div className='card-body items-center text-center'>
        <div className='text-primary text-8xl'>{icon}</div>
        <h2 className='card-title text-3xl'>{quantity}</h2>
        <p className='text-xl uppercase'>{title}</p>
      </div>
    </div>
  );
};

export default BusinessInfoCard;
