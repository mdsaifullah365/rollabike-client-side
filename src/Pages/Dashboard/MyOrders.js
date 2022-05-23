import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import CancelOrderModal from "./CancelOrderModal";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user.email], () =>
    axiosPrivate.get(`/order?email=${user.email}`)
  );
  const [modal, setModal] = useState(null);
  console.log(modal);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="text-center text-xl text-accent mt-10">My Orders</div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order) => (
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
    </>
  );
};

export default MyOrders;
