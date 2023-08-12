import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(['orders', user.email], () =>
    fetch(`https://rollabike.onrender.com/api/v1/order?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  const [modal, setModal] = useState(null);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='bg-neutral p-5 my-5'>
      <div className='uppercase text-3xl mb-5 text-base-100'>My Orders</div>
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
              <OrderRow key={order._id} order={order} setModal={setModal} />
            ))}
          </tbody>
        </table>
        {/* Cancel Order Modal */}
        {modal && (
          <CancelOrderModal
            order={modal}
            refetch={refetch}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
