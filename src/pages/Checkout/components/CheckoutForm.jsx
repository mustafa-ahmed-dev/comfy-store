import { Form, redirect } from "react-router-dom";

import { toast } from "react-toastify";

import { FormInput, SubmitButton } from "../../../components";

import { formatPrice } from "../../../utils";

import { placeOrder } from "./../../../api/order";

import { clearCart } from "../../../features/cart/cartSlice";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const data = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      name,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const response = await placeOrder(data, user.token);

      store.dispatch(clearCart());

      queryClient.removeQueries(["orders"]);

      toast.success("Order placed successfully");

      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was error placing your order";

      toast.error(errorMessage);

      if ([401, 403].includes(error?.response?.status)) {
        return redirect("/login");
      }

      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>

      <FormInput label="name" name="name" type="text" />

      <FormInput label="address" name="address" type="text" />

      <div className="mt-4">
        <SubmitButton text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
