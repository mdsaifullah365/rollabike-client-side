import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone } from 'react-icons/md';

const OrderRowAdmin = ({ order, refetch, setModal }) => {
  const {
    _id,
    productName,
    productImage,
    quantity,
    bill,
    paid,
    transactionId,
  } = order;

  return (
    <tr>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <img src={productImage} alt='Avatar Tailwind CSS Component' />
            </div>
          </div>
          <div>
            <div className='font-bold'>{productName}</div>
            <div className='text-sm opacity-75'>Quantity: ${quantity}</div>
          </div>
        </div>
      </td>
      <td>${bill.toFixed(2)}</td>
      <td>
        {paid ? (
          <p className='text-green-600 text-lg'>Paid</p>
        ) : (
          <p className='text-red-600 text-lg'>Not Paid</p>
        )}
        {paid ? (
          <span className='text-gray-800 text-xs'>
            TXNID:
            <span className='text-blue-500'> {transactionId}</span>
          </span>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className='btn btn-xs btn-success'>
            Pay Now
          </Link>
        )}
      </td>
      <th>
        {paid ? (
          <MdDone className='text-3xl text-green-500 font-bold' />
        ) : (
          <label
            onClick={() => setModal(order)}
            for='cancel-order-modal-admin'
            className='btn modal-button bg-red-500 text-white btn-sm'>
            Cancel Order
          </label>
        )}
      </th>
    </tr>
  );
};

export default OrderRowAdmin;
