import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  // Hooks
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setProduct(res.data))
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          setError(err.response.data.message);
        }
      });
  }, [id, user.email]);

  const { name, image, description, minimum, available, price } = product;

  useEffect(() => {
    setQuantity(minimum);
  }, [minimum]);

  useEffect(() => {
    setTotalPrice(quantity * price);
    setGrandTotal(quantity * price * 1.15);
  }, [quantity, price]);

  const decreaseQuantity = () => {
    if (quantity > minimum) {
      setQuantity(parseInt(quantity) - 1);
    }
  };
  const increaseQuantity = () => {
    if (quantity < available) {
      quantity ? setQuantity(parseInt(quantity) + 1) : setQuantity(1);
    }
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // YUP Validation
  const purchaseSchema = yup.object({
    phone: yup
      .string()
      .max(11, "Invalid Phone Number")
      .required("Enter your Phone Number"),
    address: yup
      .string()
      .max(100, "Address must be maximum 100 characters")
      .required("Enter your Address"),
  });
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(purchaseSchema), mode: "onBlur" });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const order = {
      email: user.email,
      phone: data.phone,
      address: data.address,
      productName: product?.name,
      productId: id,
      quantity: quantity,
      bill: grandTotal,
    };
    await axios.post(`http://localhost:5000/order`, order).then((result) => {
      if (result.data.insertedId) {
        toast.success("Order Placed Successfully");
        reset();
      }
    });
  };
  if (error) {
    return <p className="my-20 text-center text-3xl text-error">{error}</p>;
  }

  return (
    <div>
      <div className="container min-h-[calc(100vh-64px)] bg-base-200 flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card card-compact w-full max-w-xl shadow-2xl bg-base-100">
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{name}</h2>
              <p>{description}</p>
              <p>Minimum Order Quantity: {minimum}</p>
              <p>Available Quantity: {available}</p>
              <p>Price Per Unit: ${price}</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={user.email}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  {...register("phone")}
                />
                <p className="mt-2 text-sm text-error">
                  {errors.phone?.message}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Address"
                  className="textarea textarea-bordered"
                  {...register("address")}
                />
                <p className="mt-2 text-sm text-error">
                  {errors.address?.message}
                </p>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <label class="input-group">
                  <span
                    className="px-4 bg-accent text-2xl text-neutral cursor-pointer"
                    onClick={decreaseQuantity}
                  >
                    <AiOutlineMinus />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Quantity"
                    value={quantity}
                    class="input input-bordered w-full"
                    onChange={handleQuantityChange}
                  />
                  <span
                    className="px-4 bg-accent text-2xl text-neutral cursor-pointer"
                    onClick={increaseQuantity}
                  >
                    <AiOutlinePlus />
                  </span>
                </label>
                <p className="text-error text-sm mt-2">
                  {quantity < minimum && `Minimum Order Quantity is ${minimum}`}
                  {quantity > available && `Available Quantity is ${available}`}
                </p>
              </div>
              <div>
                <p>Total Price: ${totalPrice}</p>
                <p>Vat (15%) : ${totalPrice * 0.15}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={
                    quantity < minimum ||
                    quantity > available ||
                    errors?.phone ||
                    errors?.address
                  }
                  className="btn btn-primary"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
