/* eslint-disable react/prop-types */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdateEducation = ({ email, refetch }) => {
  // YUP Validation
  const educationSchema = yup.object({
    degree: yup
      .string()
      .max(20, 'Degree must be maximum 20 characters')
      .required('Degree is required'),
    institute: yup
      .string()
      .max(30, 'Institution Name must be maximum 20 characters')
      .required('Institution Name is required'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(educationSchema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { degree, institute } = data;
    const userInfo = { education: { degree: degree, institute: institute } };
    await axios
      .put(`/api/v1/user/update/${email}?email=${email}`, userInfo)
      .then((data) => {
        data.data.modifiedCount && refetch();
      });
  };

  return (
    <>
      <p className='label-text text-md text-base-200'>Education</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex gap-5 items-end text-secondary'>
        <div className='form-control w-28'>
          <label className='label'>
            <span className='label-text text-md text-base-200'>Degree</span>
          </label>
          <input
            type='text'
            placeholder='Degree'
            className='input input-bordered'
            {...register('degree')}
          />
        </div>
        <div className='form-control w-56'>
          <label className='label'>
            <span className='label-text text-md text-base-200'>Institute</span>
          </label>
          <input
            type='text'
            placeholder='Institution Name'
            className='input input-bordered'
            {...register('institute')}
          />
        </div>

        <input type='submit' value='Add' className='btn btn-secondary' />
      </form>
      <div className='flex gap-5'>
        <p className='mt-2 ml-1 text-sm text-error w-28'>
          {errors.degree?.message}
        </p>
        <p className='mt-2 ml-1 text-sm text-error w-56'>
          {errors.institute?.message}
        </p>
      </div>
    </>
  );
};

export default UpdateEducation;
