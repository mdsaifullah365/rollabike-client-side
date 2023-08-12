/* eslint-disable react/prop-types */

const ReviewCard = ({ r }) => {
  const { name, rating, review, photoURL } = r;
  return (
    <div className='card bg-neutral hover:shadow-lg text-white'>
      <div className='card-body'>
        <div className='flex items-center space-x-3 mb-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12 bg-secondary'>
              {photoURL ? (
                <img src={photoURL} alt={name} />
              ) : (
                <p className='text-white text-3xl text-center mt-1'>
                  {name[0]}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
            <div className='text-sm opacity-50'>Rating: {rating}</div>
          </div>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
