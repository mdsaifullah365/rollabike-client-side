import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
  // YUP Validation
  const loginSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid Email')
      .required('Enter your Email'),
    password: yup.string().required('Enter your Password'),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  // React Firebase hooks
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // Event Handler
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
  };

  // Assign token and Navigate
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const [token] = useToken(emailUser || googleUser);
  if (token) {
    navigate(from, { replace: true });
  }

  // Loading
  if (emailLoading || googleLoading) {
    return <Loading />;
  }

  // Firebase Error
  let signInError;
  if (emailError || googleError) {
    signInError = (
      <p className='text-center text-error mb-3'>
        {emailError?.message || googleError?.message}
      </p>
    );
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-md shadow-lg p-8 bg-neutral text-base-100'>
        <h2 className='text-center text-4xl uppercase mb-10'>Login</h2>

        {signInError}

        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-outline text-base-100 hover:bg-secondary uppercase mb-2'>
          Login with Google
        </button>

        <div className='divider my-5'>OR</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base-100 text-base'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Email'
              className='input input-bordered text-secondary w-full'
              {...register('email')}
            />
            <p className='mt-2 text-sm text-error'>{errors.email?.message}</p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base-100 text-base'>
                Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='input input-bordered text-secondary w-full'
              {...register('password')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.password?.message}
            </p>
            <label className='label'>
              <span className='label-text text-base-100-alt text-blue-400'>
                Forget Password?
              </span>
            </label>
          </div>

          <input
            type='submit'
            value='Login'
            className='btn btn-secondary w-full mt-5 mb-2'
          />
        </form>

        <p className='text-center text-sm'>
          New to RollaBike?{' '}
          <Link to='/signup' className='text-blue-400'>
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
