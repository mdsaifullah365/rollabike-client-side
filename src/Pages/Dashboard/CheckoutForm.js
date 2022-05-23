import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const CheckoutForm = ({ order }) => {
  const { _id, bill, paid } = order;
  const [user] = useAuthState(auth);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [txid, setTxid] = useState("");
  const [isPaid, setIsPaid] = useState(paid);
  useEffect(() => {
    const amount = parseFloat(bill.toFixed(2)) * 100;
    axiosPrivate
      .post("/create-payment-intent", { amount })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [bill]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardError("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error?.message) {
      setCardError(error.message);
    } else {
      setLoading(true);
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setLoading(false);
      setCardError(intentError.message);
    } else {
      setLoading(false);
      setCardError("");
      axiosPrivate
        .put(`/order/${_id}?email=${user.email}`, {
          transactionId: paymentIntent.id,
        })
        .then((res) => {
          if (res.data.modifiedCount === 1) {
            toast.success("Payment Successfull");
            setTxid(paymentIntent.id);
            setIsPaid(true);
          }
        });
    }
  };

  if (loading) {
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
        <div className="w-20 h-20 border-b-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }
  if (isPaid) {
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
        <div className="">
          <p className="text-green-500 text-3xl">Paid</p>
          <p className="text-green-500 text-md">TXNID: {txid}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-error">{cardError}</p>}
        <button
          type="submit"
          className="mt-5 btn btn-sm btn-success"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
