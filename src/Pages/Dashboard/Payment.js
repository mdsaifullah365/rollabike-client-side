import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

// stripePromise
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const { data: order, isLoading } = useQuery(['order', id], () =>
    axiosPrivate.get(`/order/${id}?email=${user.email}`)
  );
  if (isLoading) {
    return <Loading />;
  }
  const { productName, productImage, quantity, bill } = order.data;
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='card shadow-2xl bg-base-100 lg:w-1/2 p-8 text-center lg:text-left'>
          <div className='flex items-center space-x-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-40 h-40'>
                <img src={productImage} alt='Avatar Tailwind CSS Component' />
              </div>
            </div>
            <div>
              <div className='font-bold text-3xl'>{productName}</div>
              <div className='text-lg mt-2 opacity-75'>
                Quantity: {quantity}
              </div>
              <div className='text-lg mt-1 opacity-75'>Price: {bill}</div>
            </div>
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
