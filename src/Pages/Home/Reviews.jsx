import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get('/api/v1/review').then((res) => setReviews(res.data));
  }, []);
  return (
    <section className='container my-28'>
      <div className='text-5xl text-center text-base-100 mb-16 uppercase'>
        Customer <span className='text-primary'>Reviews</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {reviews.map((r) => (
          <ReviewCard r={r} key={r._id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
