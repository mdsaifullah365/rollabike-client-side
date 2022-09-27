import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfile = ({ mongoUser, user, refetch, handleShowForm }) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [degreeValue, setDegreeValue] = useState('');
  const [instituteValue, setInstituteValue] = useState('');
  const [linkedinValue, setLinkedinValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const { displayName, email } = user;
  const { phone, education, linkedin, address } = mongoUser;

  // useEffect
  useEffect(() => {
    setPhoneValue(phone);
    setDegreeValue(education?.degree);
    setInstituteValue(education?.institute);
    setLinkedinValue(linkedin);
    setAddressValue(address);
  }, [phone, education, linkedin, address]);

  // Handle Form Value Change
  const handlePhoneValueChange = (event) => {
    setPhoneValue(event.target.value);
  };
  const handleDegreeValueChange = (event) => {
    setDegreeValue(event.target.value);
  };
  const handleInstituteValueChange = (event) => {
    setInstituteValue(event.target.value);
  };
  const handleLinkedinValueChange = (event) => {
    setLinkedinValue(event.target.value);
  };
  const handleAddressValueChange = (event) => {
    setAddressValue(event.target.value);
  };

  // React Hook Form
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const userInfo = {
      phone: phoneValue,
      linkedin: linkedinValue,
      address: addressValue,
      education: { degree: degreeValue, institute: instituteValue },
    };
    await axios
      .put(`/api/v1/user/update/${email}?email=${email}`, userInfo)
      .then((data) => {
        refetch();
        handleShowForm();
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='card-body bg-accent my-5 rounded-md'>
      <div className='card-actions justify-end'>
        <button onClick={handleShowForm} className='btn btn-square btn-sm'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-base-100'>Name</span>
        </label>
        <input
          type='text'
          value={displayName}
          className='input input-bordered text-secondary'
          disabled
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-base-100'>Email</span>
        </label>
        <input
          type='text'
          value={email}
          className='input input-bordered text-secondary'
          disabled
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-base-100'>Phone Number</span>
        </label>
        <input
          type='number'
          placeholder='Phone Number'
          onChange={handlePhoneValueChange}
          value={phoneValue}
          className='input input-bordered text-secondary'
        />
        <p className='mt-2 text-sm text-error'>{errors.phone?.message}</p>
      </div>
      {/* Education */}
      <div className='flex gap-5'>
        <div className='form-control w-32'>
          <label className='label'>
            <span className='label-text text-base-100'>Degree</span>
          </label>
          <input
            type='text'
            placeholder='Degree'
            value={degreeValue}
            onChange={handleDegreeValueChange}
            className='input input-bordered text-secondary'
          />
          <p className='mt-2 ml-1 text-sm text-error'>
            {errors.degree?.message}
          </p>
        </div>
        <div className='form-control w-56'>
          <label className='label'>
            <span className='label-text text-base-100'>Institute</span>
          </label>
          <input
            type='text'
            placeholder='Institution Name'
            value={instituteValue}
            onChange={handleInstituteValueChange}
            className='input input-bordered text-secondary'
          />
          <p className='mt-2 ml-1 text-sm text-error'>
            {errors.institute?.message}
          </p>
        </div>
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-base-100'>Linked In</span>
        </label>
        <input
          type='text'
          placeholder='Linked In Profile Link'
          value={linkedinValue}
          onChange={handleLinkedinValueChange}
          className='input input-bordered text-secondary'
        />
        <p className='mt-2 text-sm text-error'>{errors.linkedin?.message}</p>
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-base-100'>Address</span>
        </label>
        <textarea
          type='text'
          placeholder='Address'
          value={addressValue}
          onChange={handleAddressValueChange}
          className='textarea textarea-bordered text-secondary'
        />
        <p className='mt-2 text-sm text-error'>{errors.address?.message}</p>
      </div>

      <div className='form-control mt-6'>
        <button className='btn btn-primary'>Update</button>
      </div>
    </form>
  );
};

export default UpdateProfile;
