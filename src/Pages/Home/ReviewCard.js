import React from 'react';

const ReviewCard = ({ r }) => {
  const { name, rating, review, photoURL } = r;
  return (
    <div class='card bg-base-100 shadow-xl'>
      <div class='card-body'>
        <div class='flex items-center space-x-3 mb-3'>
          <div class='avatar'>
            <div class='mask mask-squircle w-12 h-12 bg-slate-700'>
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
            <div class='font-bold'>{name}</div>
            <div class='text-sm opacity-50'>Ratings: {rating}</div>
          </div>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
