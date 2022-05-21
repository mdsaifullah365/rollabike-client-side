import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-md shadow-lg p-8'>
        <h2 className='text-center text-4xl uppercase mb-10'>Sign Up</h2>

        <button className='btn btn-outline uppercase mb-2'>
          Continue with Google
        </button>

        <div className='divider my-5'>OR</div>

        <form>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='input input-bordered w-full'
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Email'
              className='input input-bordered w-full'
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='input input-bordered w-full'
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='input input-bordered w-full'
            />
          </div>

          <input
            type='submit'
            value='Sign Up'
            className='btn btn-secondary w-full mt-5 mb-2'
          />
        </form>

        <p className='text-center text-sm'>
          Already have an Account?{' '}
          <Link to='/login' className='text-blue-400'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
