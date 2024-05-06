import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SectionTitle, CartTotals } from "./../../components";
import { CartItemsList } from "./components";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const { numItemsInCart } = useSelector((state) => state.cartState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="shopping cart" />

      <div className="grid mt-8 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />

          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
