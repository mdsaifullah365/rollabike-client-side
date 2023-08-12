/* eslint-disable react/prop-types */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdateLinkedIn = ({ email, refetch }) => {
  // YUP Validation
  const linkedinSchema = yup.object({
    linkedin: yup
      .string()
      .url('Must be a valid URL')
      .required('Enter your linkedin profile link'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(linkedinSchema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { linkedin } = data;
    const userInfo = { linkedin };
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
            <span className='label-text text-md text-base-200'>
              Linkedin Profile Link
            </span>
          </label>
          <input
            type='text'
            placeholder='Linkedin Profile Link'
            className='input input-bordered'
            {...register('linkedin')}
          />
        </div>

        <input type='submit' value='Add' className='btn btn-secondary' />
      </form>
      <p className='mt-2 text-sm text-error'>{errors.linkedin?.message}</p>
    </>
  );
};

export default UpdateLinkedIn;
