import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, name, image, description, minimum, available, price } = product;
  return (
    <div className='card card-compact bg-neutral text-white shadow-xl'>
      <figure className='h-1/2'>
        <img src={image} alt={name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p>Minimum Order Quantity: {minimum}</p>
        <p>Available Quantity: {available}</p>
        <p>Price Per Unit: ${price}</p>
        <div className='card-actions justify-end'>
          <Link to={`/purchase/${_id}`} className='btn btn-primary'>
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
