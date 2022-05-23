import React from "react";
import axiosPrivate from "../../api/axiosPrivate";

const OrderRow = ({ order, refetch, setModal }) => {
  const { productName, productImage, quantity, bill, paid } = order;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={productImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-75">Quantity: ${quantity}</div>
          </div>
        </div>
      </td>
      <td>${bill.toFixed(2)}</td>
      <td>
        {paid ? (
          <p className="text-green-600">Paid</p>
        ) : (
          <p className="text-red-600">Not Paid</p>
        )}
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <th>
        {paid ? (
          <button className="btn btn-error text-accent btn-sm">
            Delete from History
          </button>
        ) : (
          <label
            onClick={() => setModal(order)}
            for="cancel-order-modal"
            className="btn modal-button bg-red-500 text-white btn-sm"
          >
            Cancel Order
          </label>
        )}
      </th>
    </tr>
  );
};

export default OrderRow;
