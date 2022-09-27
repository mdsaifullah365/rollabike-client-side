import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdatePhone = ({ email, refetch }) => {
  // YUP Validation
  const phoneSchema = yup.object({
    phone: yup
      .string()
      .max(11, 'Phone number must be maximum 11 characters')
      .required('Type your phone number'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(phoneSchema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { phone } = data;
    const userInfo = { phone: phone };
    await axios
      .put(`/api/v1/user/update/${email}?email=${email}`, userInfo)
      .then((data) => {
        data.data.modifiedCount && refetch();
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex gap-5 items-end text-secondary'>
        <div className='form-control w-96'>
          <label className='label'>
            <span className='label-text text-md text-base-200'>Phone</span>
          </label>
          <input
            type='number'
            placeholder='Phone'
            className='input input-bordered'
            {...register('phone')}
          />
        </div>

        <input type='submit' value='Add' className='btn btn-secondary' />
      </form>
      <p className='mt-2 text-sm text-error'>{errors.phone?.message}</p>
    </>
  );
};

export default UpdatePhone;
