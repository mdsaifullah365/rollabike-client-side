/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, name, image, description, minimum, available, price } = product;
  return (
    <div className='card text-base-100 shadow-xl glass'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl mb-4'>{name}</h2>
        <p className='text-xl my-0'>{description}</p>
        <p className='text-xl my-0 text-primary'>
          Minimum Order Quantity: {minimum}
        </p>
        <p className='text-xl my-0 text-primary'>
          Available Quantity: {available}
        </p>
        <p className='text-xl my-0 text-primary'>Price Per Unit: ${price}</p>
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
