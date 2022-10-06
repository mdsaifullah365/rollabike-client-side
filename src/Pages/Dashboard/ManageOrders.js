import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModalAdmin from './CancelOrderModalAdmin';
import OrderRowAdmin from './OrderRowAdmin';

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(['ordersAdmin', user.email], () =>
    fetch(
      `https://roll-a-bike.herokuapp.com/api/v1/order/all?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    ).then((res) => res.json())
  );
  const [modal, setModal] = useState(null);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='bg-neutral p-5 my-5'>
      <div className='uppercase text-3xl mb-5 text-base-100'>
        Manage Products
      </div>
      <hr className='mb-10' />
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRowAdmin
                key={order._id}
                order={order}
                setModal={setModal}
              />
            ))}
          </tbody>
        </table>
        {/* Cancel Order Modal */}
        {modal && (
          <CancelOrderModalAdmin
            user={user}
            order={modal}
            refetch={refetch}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
