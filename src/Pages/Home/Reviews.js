import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get('/review').then((res) => setReviews(res.data));
  }, []);
  return (
    <section className='container my-20'>
      <div className='text-center text-3xl font-bold mb-10'>
        Customer Reviews
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {reviews.map((r) => (
          <ReviewCard r={r} key={r._id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
