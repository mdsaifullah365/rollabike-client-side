import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Signup = () => {
  // Hooks
  const navigate = useNavigate();

  // YUP Validation
  const signupSchema = yup.object({
    fullName: yup.string().required('Enter your Full Name'),
    email: yup
      .string()
      .email('Enter a valid Email')
      .required('Enter your Email'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Enter a Password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords should match')
      .required('Enter confirm Password'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  // React Firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { fullName, email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: fullName });
  };
  // Navigate
  useEffect(() => {
    if (user || googleUser) {
      toast.success('Email Verification Link Sent');
      navigate('/');
    }
  }, [user, googleUser, navigate]);

  // Loading
  if (loading || googleLoading || updating) {
    return <Loading />;
  }

  // Firebase Error
  let signUpError;
  if (error || googleError || updateError) {
    signUpError = (
      <p className='text-center text-error mb-3'>
        {error?.message || googleError?.message || updateError?.message}
      </p>
    );
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-md shadow-lg p-8'>
        <h2 className='text-center text-4xl uppercase mb-10'>Sign Up</h2>
        {signUpError}
        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-outline uppercase mb-2'>
          Signup with Google
        </button>

        <div className='divider my-5'>OR</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='input input-bordered w-full'
              {...register('fullName')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.fullName?.message}
            </p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Email'
              className='input input-bordered w-full'
              {...register('email')}
            />
            <p className='mt-2 text-sm text-error'>{errors.email?.message}</p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='input input-bordered w-full'
              {...register('password')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.password?.message}
            </p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='input input-bordered w-full'
              {...register('confirmPassword')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.confirmPassword?.message}
            </p>
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
