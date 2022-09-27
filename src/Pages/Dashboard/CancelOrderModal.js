import React from 'react';
import axios from 'axios';

const CancelOrderModal = ({ order, refetch, setModal }) => {
  const { _id, email, productImage, productName, quantity } = order;
  // Cancel an Order
  const cancelOrder = (id) => {
    axios.delete(`/api/v1/order/${id}?email=${email}`).then((res) => {
      if (res.data.deletedCount === 1) {
        setModal(null);
        refetch();
      }
    });
  };
  return (
    <div>
      <input type='checkbox' id='cancel-order-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-xl text-red-500'>
            Are you sure you want to cancel this order?
          </h3>
          <div className='flex items-center space-x-3 py-8'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={productImage} alt={productName} />
              </div>
            </div>
            <div>
              <div className='font-bold'>{productName}</div>
              <div className='text-sm opacity-75'>Quantity: ${quantity}</div>
            </div>
          </div>
          <div className='modal-action'>
            <label
              onClick={() => cancelOrder(_id)}
              className='btn bg-red-500 text-white'>
              Confirm
            </label>
            <label
              for='cancel-order-modal'
              className='btn bg-green-500 text-white'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;
