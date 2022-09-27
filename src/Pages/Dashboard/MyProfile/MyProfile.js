import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UpdateAddress from './UpdateAddress';
import UpdateEducation from './updateEducation';
import UpdateLinkedIn from './UpdateLinkedIn';
import UpdatePhone from './UpdatePhone';
import auth from '../../../firebase.init';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email, photoURL, displayName } = user;
  const [showForm, setShowForm] = useState(false);

  // Show/Hide Form
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery('mongoUser', () =>
    fetch(
      `https://rollabike.herokuapp.com/api/v1/user/${email}?email=${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const { address, phone, education, linkedin } = userProfile;

  return (
    <div className='bg-neutral p-5 my-5 text-base-200'>
      {/* Page Title */}
      <div className='uppercase text-3xl mb-5'>My Profile</div>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Left Side */}
        <div>
          {/* Avatar */}
          <div className='flex justify-center items-center'>
            <div className='avatar mx-auto my-5'>
              <div className='w-48 rounded-full bg-accent'>
                {photoURL ? (
                  <img src={photoURL} alt={displayName} />
                ) : (
                  <p className='text-white text-9xl text-center mt-5'>
                    {displayName[0]}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='mb-5 flex justify-center items-center'>
            <button onClick={handleShowForm} className='btn btn-primary'>
              {showForm ? 'Cancel Edit' : 'Edit Profile'}
            </button>
          </div>
          <hr className='mb-10' />
          {/* Name */}
          <div className='mb-5'>
            <p className='label-text text-md text-base-200'>Name</p>
            <p className='label-text text-lg text-base-100'>{displayName}</p>
          </div>
          {/* Email */}
          <div className='mb-5'>
            <p className='label-text text-md text-base-200'>Email</p>
            <p className='label-text text-lg text-base-100'>{email}</p>
          </div>
          {/* Phone */}
          <div className='mb-5'>
            {phone ? (
              <>
                <p className='label-text text-md text-base-200'>Phone</p>
                <p className='label-text text-lg text-base-100'>{phone}</p>
              </>
            ) : (
              <>
                {!showForm && <UpdatePhone email={email} refetch={refetch} />}
              </>
            )}
          </div>
          {/* Education */}
          <div className='mb-5'>
            {education ? (
              <>
                <p className='label-text text-md text-base-200'>Education</p>
                <p className='label-text text-lg text-base-100'>
                  {education.degree} at {education.institute}
                </p>
              </>
            ) : (
              <>
                {!showForm && (
                  <UpdateEducation email={email} refetch={refetch} />
                )}
              </>
            )}
          </div>
          {/* LinkedIn */}
          <div className='mb-5'>
            {linkedin ? (
              <>
                <p className='label-text text-md text-base-200'>LinkedIn</p>
                <a
                  href={linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='label-text text-2xl text-blue-500 hover:underline'>
                  {linkedin}
                </a>
              </>
            ) : (
              <>
                {!showForm && (
                  <UpdateLinkedIn email={email} refetch={refetch} />
                )}
              </>
            )}
          </div>
          {/* Address */}
          <div className='mb-5'>
            {address ? (
              <>
                <p className='label-text text-md text-base-200'>Address</p>
                <p className='label-text text-lg text-base-100'>{address}</p>
              </>
            ) : (
              <>
                {!showForm && <UpdateAddress email={email} refetch={refetch} />}
              </>
            )}
          </div>
        </div>

        {showForm && (
          <UpdateProfile
            mongoUser={userProfile}
            user={user}
            handleShowForm={handleShowForm}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default MyProfile;
