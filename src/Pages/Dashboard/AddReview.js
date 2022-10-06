import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
  // Auth State
  const [user] = useAuthState(auth);
  console.log(user);

  // YUP Validation
  const reviewSchema = yup.object({
    rating: yup
      .number()
      .integer('Rating should be an integer between 1 to 5')
      .min(1, 'Rating must be between 1 to 5')
      .max(5, 'Rating must be between 1 to 5')
      .required('Enter your Rating'),
    review: yup.string().max(200).required('Review is required'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(reviewSchema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { rating, review } = data;
    console.log(rating, review);

    const userReview = {
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      rating,
      review,
    };

    fetch(
      `https://roll-a-bike.herokuapp.com/api/v1/review?email=${user.email}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(userReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success('Review added successfully!');
          reset();
        }
      });
  };
  return (
    <div className='bg-neutral p-5 my-5 text-base-200'>
      <div className='uppercase text-3xl mb-5'>Add A Review</div>
      <hr />
      <div className='flex justify-center items-center py-10'>
        <div className='flex flex-col w-full max-w-xl bg-accent shadow-lg p-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Rating (1 to 5)
                </span>
              </label>
              <input
                type='text'
                placeholder='Rating'
                className='input input-bordered text-secondary w-full'
                {...register('rating')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.rating?.message}
              </p>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Short Review
                </span>
              </label>
              <textarea
                type='text'
                placeholder='Write your review here'
                className='textarea textarea-bordered text-secondary w-full'
                {...register('review')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.review?.message}
              </p>
            </div>

            <input
              type='submit'
              value='Add Review'
              className='btn btn-secondary w-full mt-5 mb-2'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
