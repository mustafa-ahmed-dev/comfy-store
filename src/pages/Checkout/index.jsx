import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

import { toast } from "react-toastify";

import { CartTotals, SectionTitle } from "./../../components";

import { CheckoutForm } from "./components";

export const loader = (store, queryClient) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }

  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="place your order" />

      <div className="grid mt-8 gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />

        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
