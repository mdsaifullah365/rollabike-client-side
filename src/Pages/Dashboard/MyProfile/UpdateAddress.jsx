/* eslint-disable react/prop-types */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdateAddress = ({ email, refetch }) => {
  // YUP Validation
  const addressSchema = yup.object({
    address: yup
      .string()
      .max(100, 'Address must be maximum 100 characters')
      .required('Write your address'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addressSchema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { address } = data;
    const userInfo = { address: address };
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
            <span className='label-text text-md text-base-200'>Address</span>
          </label>
          <textarea
            type='text'
            placeholder='Address'
            className='textarea textarea-bordered'
            {...register('address')}
          />
        </div>

        <input type='submit' value='Add' className='btn btn-secondary' />
      </form>
      <p className='mt-2 text-sm text-error'>{errors.address?.message}</p>
    </>
  );
};

export default UpdateAddress;
