/* eslint-disable no-undef */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
  const [user] = useAuthState(auth);
  // YUP Validation
  const signupSchema = yup.object({
    name: yup.string().required('Product Name is required'),
    description: yup
      .string()
      .max(120, 'Description must be maximum 120 characters')
      .required('Product Description is required'),
    minimum: yup
      .number()
      .integer('Quantity must be an integer')
      .required('Minimum Order Quantity is required'),
    available: yup
      .number()
      .integer('Quantity must be an integer')
      .required('Available Quantity is required'),
    price: yup.number().integer().required('Price is required'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(signupSchema) });
  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { name, description, minimum, available, price } = data;
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_API_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          const image = result.data.url;

          const product = {
            name,
            description,
            minimum,
            available,
            price,
            image,
            admin: user.email,
          };
          axios
            .post(`/api/v1/product?email=${user.email}`, product)
            .then(() => {
              toast.success('Product Added Successfully');
              reset();
            });
        }
      });
  };
  return (
    <div className='bg-neutral p-5 my-5 text-base-200'>
      <div className='uppercase text-3xl mb-5'>Add A Product</div>
      <hr />
      <div className='min-h-[calc(100vh-64px)] flex justify-center items-center py-10'>
        <div className='flex flex-col w-full max-w-xl shadow-lg p-8 bg-accent text-base-100'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Product Name
                </span>
              </label>
              <input
                type='text'
                placeholder='Product Name'
                className='input input-bordered text-secondary w-full'
                {...register('name')}
              />
              <p className='mt-2 text-sm text-error'>{errors.name?.message}</p>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Product Description
                </span>
              </label>
              <textarea
                type='text'
                placeholder='Product Description'
                className='textarea textarea-bordered text-secondary w-full'
                {...register('description')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.description?.message}
              </p>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Minimum Order Quantity
                </span>
              </label>
              <input
                type='number'
                placeholder='Minimum Order Quantity'
                className='input input-bordered text-secondary w-full'
                {...register('minimum')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.minimum?.message}
              </p>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Available Quantity
                </span>
              </label>
              <input
                type='number'
                placeholder='Available Quantity'
                className='input input-bordered text-secondary w-full'
                {...register('available')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.available?.message}
              </p>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Price Per Unit
                </span>
              </label>
              <input
                type='number'
                placeholder='Price Per Unit'
                className='input input-bordered text-secondary w-full'
                {...register('price')}
              />
              <p className='mt-2 text-sm text-error'>{errors.price?.message}</p>
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base-100 text-base'>
                  Product Image
                </span>
              </label>
              <input
                type='file'
                placeholder='Product Image'
                className='input input-bordered text-secondary w-full'
                {...register('image')}
              />
              <p className='mt-2 text-sm text-error'>{errors.image?.message}</p>
            </div>

            <input
              type='submit'
              value='Add Product'
              className='btn btn-secondary w-full mt-5 mb-2'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
